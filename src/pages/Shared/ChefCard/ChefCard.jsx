import React, { useContext, useEffect, useState } from "react";
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const ChefCard = () => {
  const [chefs, setChefs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch chefs data from API and set it to state
    fetch("http://localhost:5000/cuisine")
      .then((response) => response.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <h2 style={{ color: "#ac2b31" }} className="text-center mb-4 ">
          Our Chefs
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
          {chefs.map((chef) => (
            <div className="col" key={chef.id}>
              <Card>
                <LazyLoad>
                  <Card.Img
                    style={{ height: "311px", width: "414px" }}
                    className="img-fluid"
                    variant="top"
                    loading="lazy"
                    src={chef.image}
                  />
                </LazyLoad>
                <Card.Body>
                  <Card.Title>{chef.name}</Card.Title>
                  <Card.Text>
                    <strong>Experience:</strong> {chef.experience} years
                    <br />
                    <strong>Recipes:</strong> {chef.recipes}
                    <br />
                    <strong>Likes:</strong> {chef.likes}
                  </Card.Text>
                  <Button
                    onClick={() => navigate(`ChefRecipes/${chef.id}`)}
                    variant="info"
                  >
                    View Recipes
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
