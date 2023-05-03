import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Toast } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefRecipes = () => {
  const { ChefId } = useParams();

  const [chefData, setChefData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/cuisine')
      .then(response => response.json())
      .then(data => {
        const chef = data.find(job => job.id === ChefId);
        setChefData(chef);
      });
  }, [ChefId]);

  const handleFavoriteClick = recipeName => {
    setFavorites([...favorites, recipeName]);
    setShowToast(true);
  };

  return (
    <div className="mb-5 mt-5">
      <div className="container mt-5">
        <div className="row md:py-5">
          <div className="col-12 col-md-6  sm-12 ,md:mt-5 ">
            <div style={{ color: '#ac2b31' }}>
              <h5 className="">Meet</h5>
              <hr className="w-50 " />
              <h2 className=" fs-2 fst-italic">{chefData?.name}</h2>
              <hr className="w-50 " />
            </div>
            <p className="fw-light">{chefData?.bio}</p>
            <p className="fw-light">Likes: {chefData?.likes}</p>
            <p className="fw-light">
              Number of Recipes: {chefData?.recipesList.length}
            </p>
            <p className="fw-light">
              Years of Experience: {chefData?.experience}
            </p>
          </div>
          <div className="col-12 col-md-6 sm-12 ms-6">
            <img className="img-fluid rounded-4 " src={chefData?.image} alt="" />
          </div>
        </div>
        <h3 className="mt-5">Recipes</h3>
        <hr className="w-50 " />
        <Row xs={1} md={2} lg={3} className="g-4">
          {chefData?.recipesList.slice(0, 3).map(recipe => (
            <Col key={recipe.name}>
              <Card>
                <Card.Body>
                  <Card.Title>{recipe.name}</Card.Title>
                  <Card.Text>
                    <ul>
                      {recipe.ingredients.slice(0, 5).map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                    <p>{recipe.cookingMethod}</p>
                    <p>Rating: {recipe.rating}</p>
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleFavoriteClick(recipe.name)}
                    disabled={favorites.includes(recipe.name)}
                  >
                    {favorites.includes(recipe.name)
                      ? 'Favorite'
                      : 'Add to Favorites'}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
          }}
          >
            <ToastContainer />
          </Toast>

        </div>
      </div>
      );
    };
    
    export default ChefRecipes;
    