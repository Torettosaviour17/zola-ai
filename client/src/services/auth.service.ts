import { api } from "@/lib/axios";
import { AuthResponse, LoginData, RegisterData } from "@/types/auth";

class AuthService {
  async register(data: RegisterData) {
    const response = await api.post<AuthResponse>("/auth/register", data);

    return response.data;
  }

  async login(data: LoginData) {
    const response = await api.post<AuthResponse>("/auth/login", data);

    return response.data;
  }

  async logout() {
    const response = await api.post("/auth/logout");

    return response.data;
  }
}

export default new AuthService();
