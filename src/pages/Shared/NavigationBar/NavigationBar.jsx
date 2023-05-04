import React, { useContext } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  OverlayTrigger,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { Tooltip } from "react-bootstrap";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: 'none' ,
      color: isActive ? 'red' : 'black',
    }
  }
  

  return (
    <Navbar
      className="sticky-top mb-3"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <img
              style={{ width: "100px", height: "60px" }}
              src="https://www.saffronspice.co.nz/wp-content/uploads/2021/04/logo.png"
              alt=""
            />
          </Nav>

          <Nav className="mx-auto d-flex align-items-center gap-5">
            <NavLink style={navLinkStyles} 
              to="/"
            >
              Home
            </NavLink>
            <NavLink style={navLinkStyles}
              to="/blogs"
            >
              Blogs
            </NavLink>
          </Nav>

          <Nav>
           
            {user && (
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip">{user.displayName}</Tooltip>}
              >
                <img
                  className="rounded-circle mr-5"
                  src={user.photoURL}
                  alt="Profile Picture"
                  style={{ width: "40px", height: "40px" }}
                />
              </OverlayTrigger>
            )}

            {user ? (
              <Button
                onClick={handleLogOut}
                className="text-white border ms-3 rounded-5"
                style={{ backgroundColor: "#ac2b31" }}
              >
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button
                  className="text-white border  rounded-4 "
                  style={{ backgroundColor: "#ac2b31" }}
                >
                  Login
                </Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
