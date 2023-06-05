import axios from "axios";
import { API_URL, ENDPOINTS } from "../api.config";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/useUserStore";

export const useStart = () => {
  const api = API_URL + ENDPOINTS.START;
  const navigateTo = useNavigate();
  const setUsername = useUserStore((set) => set.setName);

  const sendRequest = async (dto: { name: string }) =>
    await axios.post(api, dto);

  return useMutation(sendRequest, {
    onSuccess(data) {
      console.log();
      setUsername(data.data.user.name);
      navigateTo("/messenger");
    },
  });
};
