/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { createCategoria, updateCategoria } from "./../../api/categoriaApi";

const CategoryForm = ({ selectedCategory, onCategoryUpdated }) => {
  const [formData, setFormData] = useState({ nombre: "", estado: true });

  useEffect(() => {
    if (selectedCategory) {
      setFormData({
        nombre: selectedCategory.nombre,
        estado: selectedCategory.estado,
      });
    } else {
      setFormData({ nombre: "", estado: true });
    }
  }, [selectedCategory]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedCategory) {
        await updateCategoria(selectedCategory.codigo, formData);
      } else {
        await createCategoria(formData);
      }
      onCategoryUpdated();
      setFormData({ nombre: "", estado: true });
    } catch (error) {
      console.error("Error saving category:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          name="estado"
          checked={formData.estado}
          onChange={handleChange}
          className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
        <label className="ml-2 block text-sm text-gray-900">Activo</label>
      </div>
      <div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          {selectedCategory ? "Actualizar" : "Crear"}
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;
