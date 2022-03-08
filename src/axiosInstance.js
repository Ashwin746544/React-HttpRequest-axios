import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});
instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM axiosInstance";

// instance.interceptors.request...    we can set also

export default instance;