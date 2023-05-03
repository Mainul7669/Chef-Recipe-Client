import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ChefInterview() {
  return (
    <Container className="mt-5">
      <h3 style={{ color: "#ac2b31" }} className="mt-5">
        Chef Interviews
      </h3>
      <hr style={{ color: "#ac2b31" }} className="w-50 " />

      <Row className="mt-4">
        <Col md={6} className="mb-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="Chef Interview 1"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/pxrCtC8CWcA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
        <Col md={6} className="mb-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="Chef Interview 2"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/TZq6jSe5MIg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
        <Col md={6} className="mb-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="Chef Interview 3"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/MNP3x3hGDfE"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
        <Col md={6} className="mb-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="Chef Interview 4"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/4c8Pv6J0-c0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ChefInterview;
