import { useQuery } from "react-query";
import { API_URL, ENDPOINTS } from "../api.config";
import axios from "axios";
import { useUserStore } from "../store/useUserStore";

export const useGetMessages = () => {
  const api = API_URL + ENDPOINTS.GETMESSAGES;
  const username = useUserStore((set) => set.name);
  const dto = { name: username };
  const getMessages = async () => await axios.get(api, { params: dto });
  const setMessages = useUserStore((set) => set.setMessages);

  return useQuery("messages", getMessages, {
    onSuccess(data) {
      setMessages(data.data.messages);
    },
    refetchInterval: 5000,
  });
};
