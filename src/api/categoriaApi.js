import axios from "axios";

const API_URL = "https://localhost:7142/api-tiendita/categoria/";

export const getAllCategorias = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const getCategoriaById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const createCategoria = async (categoriaData) => {
  try {
    const response = await axios.post(API_URL, categoriaData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const updateCategoria = async (id, categoriaData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, categoriaData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const deleteCategoria = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};
