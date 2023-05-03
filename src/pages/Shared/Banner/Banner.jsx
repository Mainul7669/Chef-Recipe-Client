import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Banner = () => {
  return (

      <div className="mb-5 mt-5">
        <div className="container mt-5">
          <div className="row md:py-5">
            <div className="col-12 col-md-6  sm-12 ,md:mt-5 ">
                
              <div style={{ color: '#ac2b31' }}>
                <h5 className="text-center">-Welcome to-</h5>
                <hr className="w-50 mx-auto" />
                <h2 className="text-center fs-2 fst-italic">Saffron Spice</h2>
                <hr className="w-50 mx-auto" />
              </div>

              <p className="fw-light">
                Discover the rich and diverse flavors of Indian cuisine with our
                expert chefs. <br /> From traditional recipes to modern takes, we bring
                you the best of Indian cooking. <br /> Join us on a culinary journey
                through the spices and aromas of India, and learn to <br /> create
                delicious dishes in your own kitchen. Get ready to awaken your
                taste buds <br /> and indulge in the bold flavors of India!
              </p>

            </div>
            <div className="col-12 col-md-6 sm-12 ms-6">
              <img
                className="img-fluid rounded-4 "
                src="https://wp.missmalini.com/wp-content/uploads/2018/03/chef.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

  );
};

export default Banner;
