interface endpointsInterface {
  START: string;
  SEND: string;
  GETMESSAGES: string;
  GETUSERS: string;
}

export const API_URL: string =
  "https://anonym-mail-server-production.up.railway.app";
export const ENDPOINTS: endpointsInterface = {
  START: "/messenger/user",
  SEND: "/messenger/send",
  GETMESSAGES: "/messenger/messages",
  GETUSERS: "/messenger/users",
};
