import { useState } from "react";
import { FaUserCircle, FaLock } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomFooter from "../common/CustomFooter";

const AuthLayout = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulación de autenticación (reemplazar con lógica real)
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === "deiv" && password === "deiv") {
      // Autenticación exitosa
      setLoading(false);
      toast.success("Inicio de sesión exitoso");
      // Aquí redirige o realiza la acción deseada al iniciar sesión correctamente
    } else {
      // Autenticación fallida
      setLoading(false);
      toast.error("Credenciales incorrectas");
    }
  };

  return (
    <div className="min-h-screen  bg-gray-100 flex flex-col items-center justify-center">
      <ToastContainer />
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        <div className="text-center">
          <FaUserCircle className="text-6xl text-blue-500 mb-4" />
          <FaLock className="text-4xl text-gray-500" />
          <h2 className="text-3xl font-bold mb-4">Iniciar Sesión</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium"
            >
              Usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500"
              placeholder="Ingresa tu usuario"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Cargando..." : "Iniciar Sesión"}
          </button>
        </form>
      </div>
      <div className="w-full">
        <CustomFooter></CustomFooter>
      </div>
    </div>
  );
};

export default AuthLayout;
