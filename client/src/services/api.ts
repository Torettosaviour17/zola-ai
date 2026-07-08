import { apiClient } from "@/lib/axios";

export const apiService = {
  getHealth: async () => apiClient.get("/health"),
};
