import axios from "axios";

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";

const service = axios.create({
  baseURL: "https://localhost:8090",
  timeout: 30000,
});

// Add a request interceptor
service.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    // get请求映射params参数
    // if (config.method === 'get' && config.params) {
    //   let url = config.url + '?' + tansParams(config.params);
    //   url = url.slice(0, -1);
    //   config.params = {};
    //   config.url = url;
    // }
    console.log("request have been sent", config);
    return config;
  },
  (error) =>
    // Do something with request error
    Promise.reject(error),
);

// Add a response interceptor
service.interceptors.response.use(
  (response) =>
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response,
  (error) =>
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Promise.reject(error),
);

export default service;
