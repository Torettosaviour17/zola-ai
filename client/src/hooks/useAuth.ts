import authService from "@/services/auth.service";
import { useAuthStore } from "@/stores/auth.store";
import { LoginData, RegisterData } from "@/types/auth";

export function useAuth() {
  const { user, loading, isAuthenticated, setUser, setLoading, logout } =
    useAuthStore();

  async function register(data: RegisterData) {
    setLoading(true);

    try {
      const response = await authService.register(data);

      setUser(response.user);

      return response;
    } finally {
      setLoading(false);
    }
  }

  async function login(data: LoginData) {
    setLoading(true);

    try {
      const response = await authService.login(data);

      setUser(response.user);

      return response;
    } finally {
      setLoading(false);
    }
  }

  async function getCurrentUser() {
    try {
      const response = await authService.getCurrentUser();

      setUser(response.user);

      return response.user;
    } catch {
      setUser(null);

      return null;
    } finally {
      setLoading(false);
    }
  }

  async function logoutUser() {
    await authService.logout();
    logout();
  }

  return {
    user,
    loading,
    isAuthenticated,
    register,
    login,
    logout: logoutUser,
    getCurrentUser,
  };
}
