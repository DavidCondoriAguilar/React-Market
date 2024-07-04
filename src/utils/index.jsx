// api.js

export const ApiWebURL = "http://localhost:7142/api-tienditarest"; // Reemplaza con la URL base de tu API

export const CategoriaApiURL = `${ApiWebURL}/categoria/`;
export const ProductoApiURL = `${ApiWebURL}/producto/`;

export const fetchCategorias = async () => {
  try {
    const response = await fetch(CategoriaApiURL);
    if (!response.ok) {
      throw new Error("Error al obtener las categorías");
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const addCategoria = async (categoria) => {
  try {
    const response = await fetch(CategoriaApiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoria),
    });
    if (!response.ok) {
      throw new Error("Error al agregar la categoría");
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const updateCategoria = async (categoria) => {
  try {
    const url = `${CategoriaApiURL}${categoria.codcat}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoria),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar la categoría");
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const deleteCategoria = async (id) => {
  try {
    const url = `${CategoriaApiURL}${id}`;
    const response = await fetch(url, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al eliminar la categoría");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
