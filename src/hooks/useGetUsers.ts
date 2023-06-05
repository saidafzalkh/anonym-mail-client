import axios from "axios";
import { API_URL, ENDPOINTS } from "../api.config";
import { useQuery } from "react-query";
import { useUsersList } from "../store/useUsersList";

export const useGetUsers = () => {
  const api = API_URL + ENDPOINTS.GETUSERS;
  const getUsers = async () => await axios.get(api);
  const setUsers = useUsersList((set) => set.setUsers);

  return useQuery("users", getUsers, {
    onSuccess(data) {
      setUsers(data.data.users);
    },
    refetchInterval: 5000,
  });
};
