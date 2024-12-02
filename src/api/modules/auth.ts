import { createModule } from "@api/utils/create-module";
import { Axios } from "@api/configs/axios";


export interface AuthMethods {
  login: (credentials: { email: string; password: string }) => Promise<any>;
  register: (data: { name: string; email: string; password: string }) => Promise<any>;
}

const api = new Axios('auth');
const axiosInstance = api.apiClient;

const authMethods: AuthMethods = {
  login: async (data) => {
    try {
      const response = await axiosInstance.post('/auth/login', data);
      return response?.data;
    } catch (error) {
      return error?.response?.data;
    }
  },
  register: async (data) => {
    try {
      const response = await axiosInstance.post('/auth/register', data);
      return response?.data;
    } catch (error) {
      return error?.response?.data;
    }
  },
};

export const auth = createModule<unknown, AuthMethods>('auth', authMethods);
