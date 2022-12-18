import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import useLogin from "../hooks/useLogin";

const LoginForm = () => {
  const [
    loginCredentials,
    onChange,
    onSubmit,
    ajaxError,
    loginErrors,
    disabled,
  ] = useLogin();

  return (
    <Container>
      {ajaxError && <Alert variant="danger">{ajaxError}</Alert>}
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="email">
          <Form.FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              name="email"
              placeholder="name@example.com"
              value={loginCredentials.email}
              onChange={onChange}
              isInvalid={!!loginErrors.email}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {loginErrors.email}
            </Form.Control.Feedback>
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
              name="password"
              placeholder="Password"
              value={loginCredentials.password}
              onChange={onChange}
              isInvalid={!!loginErrors.password}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              {loginErrors.password}
            </Form.Control.Feedback>
          </Form.FloatingLabel>
        </Form.Group>
        <Button variant="primary" type="submit" disabled={disabled}>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
