import { userInterface } from "./userInterface";

export interface usersListInterface {
  users: userInterface[];
  setUsers: (users: userInterface[]) => void;
}
