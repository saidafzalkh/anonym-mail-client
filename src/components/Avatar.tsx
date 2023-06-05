import { ReactElement } from "react";

const Avatar = ({ hash }: { hash: string }): ReactElement => {
  return (
    <div
      style={{ width: "3rem", height: "3rem" }}
      className="border overflow-hidden rounded-circle d-flex justify-content-center bg-white"
    >
      <img style={{ width: "100%" }} src={`https://robohash.org/${hash}`} />
    </div>
  );
};

export default Avatar;
