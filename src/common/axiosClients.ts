import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  // headers: {
  //   Authorization: `Basic ${process.env.BACKEND_TOKEN}`,
  // },
 
});

// axiosClient.interceptors.request.use((config)=>{
//   config.headers.Authorization = `Basic ${process.env.BACKEND_TOKEN}`;
//   return config;
// })

// axiosClient.interceptors.request.use((config) => {
//   config.headers.token = localStorage.getItem('token');
//   return config;
// });

// axiosClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error: AxiosError) => {
//     if (error.response?.status === 401 && window.location.pathname !== '/login') {
//       redirectToLogin();
//       return;
//     }
//     return Promise.reject(error);
//   },
// );

// axiosClient.interceptors.request.use((config) => {
//   // Check if the request is not the login request
//   if (config.url !== '/login') {
    
//       config.headers.Authorization = `Basic ${process.env.BACKEND_TOKEN}`; // Include the token in the Authorization header
    
//   }
//   return config;
// });

// axiosClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error: AxiosError) => {
//     if (error.response?.status === 401 && window.location.pathname !== '/login') {
//       redirectToLogin();
//     }
//     return Promise.reject(error);
//   },
// );

export default axiosClient;
