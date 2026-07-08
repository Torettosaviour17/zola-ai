export interface User {
  _id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user: User;
  token?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}
