import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (

    <footer className="mt-5"  style={{ backgroundColor: "#870615" }}>
    <div className="container py-4 ">
      <div className="row">
        <div className="col-md-4 text-white">
          <h4 style={{ fontStyle: "italic" }} className="fs-5">
            SaffronSpice
          </h4>
          <p className="">
            Our passion is a contemporary restaurant offering dining
            experiences to satisfy all aspects of fine cuisine: Food
            selection, service, ambience and atmosphere. Our menu reflects the
            diversity of India, steeped in the classics while offering deft
            touches of modernity. <br /> Read more...
          </p>
        </div>
        <div className="col-md-4 text-white">
          <h5 className="mb-3">Contact Us</h5>
          <p>123 Main St</p>
          <p>Anytown, USA 12345</p>
          <p>Phone: (555) 555-5555</p>
          <p>Email: info@saffronspice.com</p>
        </div>
        <div className="col-md-4 text-right text-white">
          <p className="fs-5">Follow Us</p>
          <p>Join us on social networks</p>
          <a href="#" className="fs-4 text-white fa-lg mx-3">
            {" "}
            <BsFacebook />
          </a>
          <a href="#" className="fs-4 text-white fa-lg mx-3">
            <BsInstagram />
          </a>
          <a href="#" className="fs-4 text-white fa-lg mx-3">
            <BsTwitter />
          </a>
        </div>
      </div>
    </div>
    <hr />
      <p className="text-center text-secondary pb-3">All rights reserved to Saffron Spice. Powered by MIN</p>
  </footer>

  );
};

export default Footer;
