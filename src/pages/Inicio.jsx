import { Carousel, Button, Card } from 'flowbite-react';
import { FaStar, FaShoppingCart, FaClipboardList, FaWarehouse, FaTruck } from 'react-icons/fa';
import CustomFooter from '../components/common/CustomFooter';

export default function Inicio() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <header className="bg-gray-800 text-white text-center py-5">
        <h1 className="text-4xl font-bold underline ">Bienvenido Sir</h1>
        <p className="text-lg mt-2">La mejor experiencia para gestionar tus productos</p>
      </header>

      <main className="container mx-auto mt-10">
        {/* Carousel Section */}
        <div className="mb-10">
          <Carousel>
            <img src="https://via.placeholder.com/800x400" alt="Imagen de carrusel 1" />
            <img src="https://via.placeholder.com/800x400" alt="Imagen de carrusel 2" />
            <img src="https://via.placeholder.com/800x400" alt="Imagen de carrusel 3" />
          </Carousel>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Categorías */}
          <Card className="flex flex-col items-center text-center">
            <FaClipboardList className="text-yellow-500 text-6xl mb-4" />
            <h2 className="text-2xl font-bold">Categorías</h2>
            <p className="mt-2 text-gray-600">Explora una amplia variedad de categorías de productos.</p>
            <Button className="mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Ver más
              </span>
            </Button>
          </Card>

          {/* Card 2 - Productos */}
          <Card className="flex flex-col items-center text-center">
            <FaShoppingCart className="text-green-500 text-6xl mb-4" />
            <h2 className="text-2xl font-bold">Productos</h2>
            <p className="mt-2 text-gray-600">Descubre y gestiona todos los productos disponibles.</p>
            <Button className="mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Ver más
              </span>
            </Button>
          </Card>

          {/* Card 3 - Guía */}
          <Card className="flex flex-col items-center text-center">
            <FaStar className="text-blue-500 text-6xl mb-4" />
            <h2 className="text-2xl font-bold">Guía</h2>
            <p className="mt-2 text-gray-600">Accede a nuestras guías y consejos para un mejor uso.</p>
            <Button className="mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Ver más
              </span>
            </Button>
          </Card>

          {/* Card 4 - Local */}
          <Card className="flex flex-col items-center text-center">
            <FaWarehouse className="text-purple-500 text-6xl mb-4" />
            <h2 className="text-2xl font-bold">Local</h2>
            <p className="mt-2 text-gray-600">Gestiona tus locales y almacenes de manera eficiente.</p>
            <Button className="mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Ver más
              </span>
            </Button>
          </Card>

          {/* Card 5 - Orden */}
          <Card className="flex flex-col items-center text-center">
            <FaClipboardList className="text-red-500 text-6xl mb-4" />
            <h2 className="text-2xl font-bold">Orden</h2>
            <p className="mt-2 text-gray-600">Mantén un control detallado de todas tus órdenes y más.</p>
            <Button className="mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Ver más
              </span>
            </Button>
          </Card>

          {/* Card 6 - Proveedor */}
          <Card className="flex flex-col items-center text-center">
            <FaTruck className="text-orange-500 text-6xl mb-4" />
            <h2 className="text-2xl font-bold">Proveedor</h2>
            <p className="mt-2 text-gray-600">Gestiona y organiza tus proveedores de manera efectiva.</p>
            <Button className="mt-4 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Ver más
              </span>
            </Button>
          </Card>
        </div>
        <CustomFooter></CustomFooter>
      </main>
      
    </div>
  );
}
