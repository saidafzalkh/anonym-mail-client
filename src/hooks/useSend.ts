import axios from "axios";
import { API_URL, ENDPOINTS } from "../api.config";
import { useMutation } from "react-query";
import { dtoSend } from "../types/dto.send";

export const useSend = () => {
  const api = API_URL + ENDPOINTS.SEND;

  const sendRequest = async (dto: dtoSend) => await axios.post(api, dto);

  return useMutation(sendRequest, {
    onSuccess(data) {
      if (data.data.ghost)
        alert(
          "You sent a message to a non-existent user. We'll deliver it when it appears in our app"
        );
    },
  });
};
