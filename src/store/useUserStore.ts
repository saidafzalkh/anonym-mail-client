import { create } from "zustand";
import { userStoreInterface } from "../types/userStoreInterface";

export const useUserStore = create<userStoreInterface>((set) => ({
  name: "",
  messages: [],

  setName(name) {
    set(() => ({ name }));
  },

  setMessages(messages) {
    set(() => ({ messages }));
  },
}));
