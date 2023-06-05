import { messagesInterface } from "./messagesInterface";

export interface userStoreInterface {
  name: string;
  setName: (name: string) => void;
  messages: messagesInterface[];
  setMessages: (messages: messagesInterface[]) => void;
}
