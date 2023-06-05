import { ReactElement, useState } from "react";
import { Button, Card, FloatingLabel, Form, Spinner } from "react-bootstrap";
import { useStart } from "../hooks/useStart";

const StartForm = (): ReactElement => {
  const { mutate: start, isLoading: startLoading } = useStart();
  const [name, setName] = useState("");

  return (
    <Card>
      <Card.Body>
        <Form
          className="d-flex flex-column gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            start({ name });
          }}
        >
          <FloatingLabel label="Nickname">
            <Form.Control
              type="name"
              required
              placeholder="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FloatingLabel>
          <Button type="submit" variant="dark">
            {startLoading ? <Spinner size="sm" /> : <span>START</span>}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default StartForm;
