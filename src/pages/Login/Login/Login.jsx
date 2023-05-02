import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError('');
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError('');
        navigate(from, { replace: true });
    })
    .catch(error => {
        setError(error.message);
        console.log(error)
    })
}
  
const handleGithubSignIn = () => {
    signInWithGithub()
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError('');
        navigate(from, { replace: true });
    })
    .catch(error => {
        setError(error.message);
        console.log(error)
    })
}

  return (
    <Container className="w-25 mx-auto">
      <h3>Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Don't Have an Account? <Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>

      <p className="text-danger">{error}</p>

      <div className="d-flex  align-items-center gap-2 mt-3">
        <Button onClick={handleGoogleSignIn} variant="outline-primary">
          {" "}
          <FaGoogle /> Login with Google
        </Button>
        <Button onClick={handleGithubSignIn} variant="outline-secondary">
          {" "}
          <FaGithub></FaGithub> Login with Github
        </Button>
      </div>

    </Container>
  );
};

export default Login;
