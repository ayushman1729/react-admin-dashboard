
import api from "./api";

export const getProducts = async (limit, skip) => {
  const res = await api.get(`/products?limit=${limit}&skip=${skip}`);
  return res.data;
};

export const getProduct = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};

export const addProduct = async (product) => {
  const res = await api.post("/products/add", product);
  return res.data;
};

export const updateProduct = async (id, product) => {
  const res = await api.put(`/products/${id}`, product);
  return res.data;
};

export const deleteProduct = async (id) => {
  const res = await api.delete(`/products/${id}`);
  return res.data;
};

export const getCategories = async () => {
  const res = await api.get("/products/categories");
  return res.data;
};

export const getSingleProduct = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};