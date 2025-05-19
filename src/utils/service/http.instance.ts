import axios from 'axios'

export const DATASET_V1_BASE_URL = "https://data.pundi.ai/ai-dataset-data";

const instance = axios.create({
  baseURL: DATASET_V1_BASE_URL,
  timeout: 60000,
})

// Add request interceptor if needed
instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use((response) => {
  if (response.data.code === 200) {
    return Promise.resolve(response.data)
  }
  else {
    return Promise.reject(response.data.code)
  }
}, (error) => {
  return Promise.reject(error)
})

export default instance
