import axiosClient from "../common/axiosClients";

export async function login(req: any) {
  return axiosClient.post("/security/login", req);
}

export async function getUser() {
  return axiosClient.get("/user");
}
