import axiosClient from "../common/axiosClients";

export async function getLookupValues(lookupName: string) {
  return axiosClient.get(`/lookup/${lookupName}`);
}

export async function getSkills() {
  return axiosClient.get("/lookup/skills/list");
}

export async function saveLookupInfo(request: any, type: string) {
  return axiosClient.post(`/lookup/${type}`, request);
}

export async function saveSkills(request: any) {
  return axiosClient.post("/lookup/skills", request);
}

export async function deleteLookup(type: any, id: any) {
  return axiosClient.delete(`/lookup/${type}/${id}`);
}
