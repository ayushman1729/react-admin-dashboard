import api from "./api";

export const addUsers = async (users) => {
  const res = await api.post("/users/");
  return res.data;
};