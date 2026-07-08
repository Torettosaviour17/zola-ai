import { api } from "@/lib/api";
import { API } from "@/lib/constants";
import { LoginPayload, RegisterPayload } from "../types/auth.types";

export const authService = {
  login(data: LoginPayload) {
    return api.post(API.LOGIN, data);
  },

  register(data: RegisterPayload) {
    return api.post(API.REGISTER, data);
  },
};
