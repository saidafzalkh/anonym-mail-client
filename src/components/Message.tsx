import { ReactElement } from "react";
import { Accordion } from "react-bootstrap";
import Avatar from "./Avatar";
import { messagesInterface } from "../types/messagesInterface";
import { timeFormatter } from "../helper/timeFormatter";

const Message = ({ message }: { message: messagesInterface }): ReactElement => {
  return (
    <Accordion.Item eventKey={message.id.toString()}>
      <Accordion.Header>
        <div className="d-flex justify-content-between w-100 align-items-center px-2">
          <div className="p-1 d-flex align-items-center h-100 gap-2">
            <Avatar hash={message.senderName} />
            <div className="d-flex flex-column">
              <p className="m-0">{message.senderName}</p>
              <h5 className="m-0">{message.title}</h5>
            </div>
          </div>
          <small className="text-secondary">
            {timeFormatter(message.time)}
          </small>
        </div>
      </Accordion.Header>
      <Accordion.Body>{message.body}</Accordion.Body>
    </Accordion.Item>
  );
};

export default Message;
