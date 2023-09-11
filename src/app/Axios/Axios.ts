import axiosApi from 'axios';
import { getSessionToken } from '@tiendanube/nexo';

import nexo from '../NexoClient';

const axios = axiosApi.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axios.interceptors.request.use(
  async (config) => {
    if (config.headers) {
      const token = await getSessionToken(nexo);
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

export default axios;
