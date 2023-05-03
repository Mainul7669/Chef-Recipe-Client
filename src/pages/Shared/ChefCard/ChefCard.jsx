import React from "react";

import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const ChefCard = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    // Fetch chefs data from API and set it to state
    fetch("http://localhost:5000/cuisine")
      .then((response) => response.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <div>
      <h2>ChefCard </h2>
      <div className="container">
        <h2 className="text-center mb-4">Our Chefs</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {chefs.map((chef) => (
            <div className="col" key={chef.id}>
              <Card>
                <Card.Img style={{height:'311px', width:'414px'}} 
                  className="img-fluid"
                  variant="top"
                  src={chef.image}
                />

                <Card.Body>
                  <Card.Title>{chef.name}</Card.Title>
                  <Card.Text>
                    <strong>Experience:</strong> {chef.experience} years
                    <br />
                    <strong>Recipes:</strong> {chef.recipes}
                    <br />
                    <strong>Likes:</strong> {chef.likes}
                  </Card.Text>
                  <Button variant="primary">View Recipes</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      );
    </div>
  );
};

export default ChefCard;
