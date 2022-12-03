import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const index = () => {
  return (
    <Container>
      <Form>
        <Form.Group controlId="email">
          <Form.FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.FloatingLabel>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="mb-3"
          >
            <Form.Control type="password" placeholder="Password" />
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
