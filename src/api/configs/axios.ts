import { ResponseApi } from '@api/interfaces/api.interfaces';
import axios, { AxiosInstance } from 'axios';

export class Axios<DataInterface> {
  public apiClient: AxiosInstance;
  protected token: string | undefined;

  constructor(public readonly path: string, token?: string) {
    this.token = token;
    this.apiClient = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3010/api",
      timeout: 1000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.init();
  }

  private init() {
    this.apiClient.interceptors.request.use(
      (config) => {
        if (this.token) {
          config.headers.Authorization = `Bearer ${this.token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  public getApiClient() {
    return this.apiClient;
  }

  async findAllAxios() {
    try {
      console.log(`Fetching data from ${this.path}`);
      const response = await this.apiClient.get(`/${this.path}`);
      console.log(response?.data);
      
      return response?.data;
    } catch (error) {
      console.log(error);
      
      return error?.response?.data;
    }
  }

  async createAxios(datas: DataInterface) {
    try {
      const response = await this.apiClient.post(`/${this.path}`, datas);
      return response?.data;
    } catch (error) {
      return error?.response?.data;
    }
  }

  async findOneAxios(id: string) {
    try {
      const response = await this.apiClient.get(`/${this.path}/${id}`);
      return response?.data;
    } catch (error) {
      return error?.response?.data;
    }
  }

  async updateAxios(id: string, datas: DataInterface) {
    try {
      const response = await this.apiClient.put(`/${this.path}/${id}`, datas);
      return response?.data;
    } catch (error) {
      return error?.response?.data;
    }
  }

  async deleteAxios(id: string) {
    try {
      const response = await this.apiClient.delete(`/${this.path}/${id}`);
      return response?.data;
    } catch (error) {
      return error?.response?.data;
    }
  }
}
