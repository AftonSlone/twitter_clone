import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useLogin from "../../hooks/useLogin";

const index = () => {
  const [loginCredentials, onChange] = useLogin();

  return (
    <Container>
      <Form>
        <Form.Group controlId="email">
          <Form.FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={loginCredentials.email}
              onChange={onChange}
            />
          </Form.FloatingLabel>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="mb-3"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              value={loginCredentials.password}
              onChange={onChange}
            />
          </Form.FloatingLabel>
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Button variant="primary" type="button">
          Demo Login
        </Button>
      </Form>
    </Container>
  );
};

export default index;
