import { create } from "zustand";
import { usersListInterface } from "../types/usersLisStoreInterface";

export const useUsersList = create<usersListInterface>((set) => ({
  users: [],

  setUsers(users) {
    set(() => ({ users }));
  },
}));
