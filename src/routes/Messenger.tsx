import { ReactElement } from "react";
import { Card, Tab, Tabs } from "react-bootstrap";
import SendForm from "../components/SendForm";
import Messages from "../components/Messages";
import Avatar from "../components/Avatar";
import { Link, Navigate } from "react-router-dom";
import { DoorOpen } from "react-bootstrap-icons";
import { useUserStore } from "../store/useUserStore";

const Messenger = (): ReactElement => {
  const username = useUserStore((set) => set.name);

  if (username === "") return <Navigate to="/" />;
  return (
    <main className="d-flex justify-content-center flex-column align-items-center vh-100">
      <header
        className="d-flex align-items-center p-1 justify-content-between"
        style={{ width: "26rem" }}
      >
        <div className="d-flex align-items-center gap-2">
          <Avatar hash={username} />
          <h6 className="m-0">{username}</h6>
        </div>
        <Link
          to="/"
          className="text-secondary"
          style={{ fontSize: "1.3rem" }}
          title="Exit"
        >
          <DoorOpen />
        </Link>
      </header>
      <Card style={{ width: "26rem", height: "30rem" }}>
        <Card.Body>
          <Tabs
            defaultActiveKey="send"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="messages" title="Messages">
              <Messages />
            </Tab>
            <Tab eventKey="send" title="Send">
              <SendForm />
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </main>
  );
};

export default Messenger;
