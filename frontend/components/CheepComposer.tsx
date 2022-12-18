import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ChangeEvent } from "react";
import useCheepComposer from "../hooks/useCheepComposer";

const CheepComposer = () => {
  const [
    addPhoto,
    addContent,
    postNewCheep,
    newCheep,
    contentErrors,
    disabled,
  ] = useCheepComposer();

  const submitCheep = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

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
              value={newCheep.content}
              onChange={addContent}
              style={{ height: "100px" }}
            />
          </Form.FloatingLabel>
        </Form.Group>

        <Form.Group>
          <Form.Label>
            <Form.Control type="file" onChange={addPhoto} accept="image/*" />
          </Form.Label>
        </Form.Group>
      </Form>
      <Button variant="primary" type="submit" disabled={disabled}>
        Cheep
      </Button>
    </Container>
  );
};

export default CheepComposer;
