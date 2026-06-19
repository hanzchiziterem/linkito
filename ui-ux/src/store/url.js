import { create } from "zustand";
import api from "../libs/services/axios";
import handleAxiosError from "../libs/errors/axios-error";

export const useUrlStore = create((set) => ({
  isCopied: false,
  isLoading: false,

  createUrl: async (data) => {
    try {
      const res = api.post("/create", data);
      set({ isLoading: true });
      console.log(res);
    } catch (error) {
      const appError = handleAxiosError(error);
      set({ isLoading: false });
    }
  },
}));
