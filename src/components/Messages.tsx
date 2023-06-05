import { ReactElement } from "react";
import Message from "./Message";
import { Accordion } from "react-bootstrap";
import { useUserStore } from "../store/useUserStore";
import { useGetMessages } from "../hooks/useGetMessages";

const Messages = (): ReactElement => {
  useGetMessages();
  const messages = useUserStore((set) => set.messages);

  return (
    <Accordion className="overflow-y-auto" style={{ height: "24rem" }}>
      {messages.length === 0 ? (
        <small className="text-center d-inline-block w-100 text-secondary">
          Nothing yet
        </small>
      ) : (
        messages
          .slice(0)
          .reverse()
          .map((message) => <Message message={message} key={message.id} />)
      )}
    </Accordion>
  );
};

export default Messages;
