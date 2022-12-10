import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useSignup from "../../hooks/useSignup";

const index = () => {
  const [signupInfo, onChange] = useSignup();

  return (
    <Container>
      <Form>
        <Form.Group controlId="username">
          <Form.FloatingLabel
            controlId="username"
            label="Username"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Username"
              value={signupInfo.username}
              onChange={onChange}
            />
          </Form.FloatingLabel>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.FloatingLabel
            controlId="email"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={signupInfo.email}
              onChange={onChange}
            />
          </Form.FloatingLabel>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.FloatingLabel
            controlId="password"
            label="Password"
            className="mb-3"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              value={signupInfo.password}
              onChange={onChange}
            />
          </Form.FloatingLabel>
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.FloatingLabel
            controlId="confirmPassword"
            label="Confirm Password"
            className="mb-3"
          >
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={signupInfo.confirmPassword}
              onChange={onChange}
            />
          </Form.FloatingLabel>
        </Form.Group>
        <Button variant="primary" type="submit">
          Signup
        </Button>
      </Form>
    </Container>
  );
};

export default index;
