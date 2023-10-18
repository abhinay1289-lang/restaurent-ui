import axiosClient from "../common/axiosClients";

export async function login(req: any) {
  return axiosClient.get("/security/login", req);
}

export async function getUser() {
  return axiosClient.get("/user");
}
