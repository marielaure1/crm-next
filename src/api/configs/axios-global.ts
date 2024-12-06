import axios, { AxiosInstance } from 'axios';

export const apiClient: AxiosInstance = axios.create({
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
});
