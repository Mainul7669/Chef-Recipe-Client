import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button, Toast } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LazyLoad from "react-lazy-load";
import { FaStar } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";

const ChefRecipes = () => {
  const { ChefId } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [chefData, setChefData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    fetch("https://assignment-10-server-one-kappa.vercel.app/cuisine")
      .then((response) => response.json())
      .then((data) => {
        const chef = data.find((job) => job.id === ChefId);
        setChefData(chef);
        setIsLoading(false);
      });
  }, [ChefId]);

  const handleFavoriteClick = (recipeName) => {
    setFavorites([...favorites, recipeName]);
    setShowToast(true);
    toast.success(`${recipeName} has been added to favorites!`);
  };

  return (
    <div className="mb-5 mt-5">
      {isLoading ? (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container mt-5">
          <div className="row md:py-5">
            <div className="col-12 col-md-6  sm-12 ,md:mt-5 ">
              <div style={{ color: "#ac2b31" }}>
                <h5 className="">Meet</h5>
                <hr className="w-50 " />
                <h2 className=" fs-2 fst-italic">{chefData?.name}</h2>
                <hr className="w-50 " />
              </div>
              <p className="fw-light">{chefData?.bio}</p>
              <p className="fw-light"><BsFillHeartFill className="text-danger me-2"></BsFillHeartFill>{chefData?.likes}</p>
              <p className="fw-light">
                Number of Recipes: {chefData?.recipesList.length}
              </p>
              <p className="fw-light">
                Years of Experience: {chefData?.experience}
              </p>
            </div>

            <div className="col-12 col-md-6 sm-12 ms-6">
              <LazyLoad offsetVertical={500} debounce={false}>
                <img
                  className="img-fluid rounded-4 "
                  src={chefData?.image}
                  loading="lazy"
                  alt=""
                />
              </LazyLoad>
            </div>
          </div>

          <div>
          <h3 className="mt-5">Recipes</h3>
          <hr style={{ color: "#ac2b31" }} className="w-50 " />
          <Row xs={1} md={2} lg={3} className="g-4 ">
            {chefData?.recipesList.slice(0, 3).map((recipe) => (
              <Col key={recipe.name}>
                <Card>
                  <Card.Body>
                    <Card.Title>{recipe.name}</Card.Title>
                    <Card.Text>
                      <p className="fw-bold">Ingredients:</p>
                      <ul>
                        {recipe.ingredients
                          .slice(0, 5)
                          .map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                          ))}
                      </ul>
                      <div>
                        <p className="fw-bold">Cooking Method:</p>
                        <p>{recipe.cookingMethod}</p>
                      </div>

                      <div className=" d-flex align-items-center gap-2">
                        <span className="text-warning">
                          <FaStar></FaStar> 
                          <FaStar></FaStar>
                          </span>

                           {recipe.rating}
                          
                      </div>

                    </Card.Text>

                    <Button
                      variant="primary"
                      onClick={() => handleFavoriteClick(recipe.name)}
                      disabled={favorites.includes(recipe.name)}
                    >
                      {favorites.includes(recipe.name)
                        ? "Favorite"
                        : "Add to Favorites"}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />

</div>
        </div>
      )}{" "}
    </div>
  );
};

export default ChefRecipes;
