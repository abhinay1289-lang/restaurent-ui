import axiosClient from "../common/axiosClients";

export async function login() {
    return axiosClient.post('/user');
  }

  export async function getUser() {
    return axiosClient.get('/user');
  }