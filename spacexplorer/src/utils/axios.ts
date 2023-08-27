import axios from 'axios';

// Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default axiosInstance;
