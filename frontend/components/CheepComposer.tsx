import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ChangeEvent, useState } from "react";

const CheepComposer = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState(null);

  const submitCheep = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <Container>
      <Form>
        <Form.Group controlId="whatsHappening">
          <Form.FloatingLabel
            controlId="whatsHappening"
            label="What's Happening"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              placeholder="What's Happening"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{ height: "100px" }}
            />
          </Form.FloatingLabel>
        </Form.Group>
      </Form>
      <Button>Cheep</Button>
    </Container>
  );
};

export default CheepComposer;
