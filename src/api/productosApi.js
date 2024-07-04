import axios from 'axios';

const API_URL = 'https://localhost:44376/api-tiendita/productos/'; 

export const getAllProductos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const getProductoById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const createProducto = async (productoData) => {
  try {
    const response = await axios.post(API_URL, productoData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const updateProducto = async (id, productoData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, productoData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const deleteProducto = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};
