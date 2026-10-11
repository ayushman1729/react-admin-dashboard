import api from "./api";

export const addUsers = async (userData) => {
  const res = await api.post("/users/add", userData);
  return res.data;
};