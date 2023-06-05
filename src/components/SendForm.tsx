import { ReactElement, SyntheticEvent, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { Option } from "react-bootstrap-typeahead/types/types";
import { useUserStore } from "../store/useUserStore";
import { useSend } from "../hooks/useSend";
import { useUsersList } from "../store/useUsersList";
import { useGetUsers } from "../hooks/useGetUsers";

const SendForm = (): ReactElement => {
  useGetUsers();
  const nicknames = useUsersList((set) => set.users).map((user) => user.name);
  const [recipient, setRecipient] = useState<string | Option>("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const username = useUserStore((set) => set.name);
  const { mutate: send, isLoading } = useSend();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const data = {
      sender: username,
      recipient: recipient ? recipient.toString() : recipient,
      title,
      body,
    };
    setTitle("");
    setBody("");
    send(data);
  };

  return (
    <Form className="d-flex flex-column gap-2" onSubmit={handleSubmit}>
      <Form.Group>
        <Typeahead
          id="recipients"
          options={nicknames}
          inputProps={{
            value: recipient ? recipient.toString() : recipient,
          }}
          onInputChange={(value) => setRecipient(value)}
          onChange={(selected) => setRecipient(selected[0])}
          placeholder="Recipient"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Your message"
          rows={10}
          style={{ resize: "none" }}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="dark" type="submit">
        {isLoading ? <Spinner size="sm" /> : <span>Send</span>}
      </Button>
    </Form>
  );
};

export default SendForm;
