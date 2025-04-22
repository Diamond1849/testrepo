import React, { useState } from 'react';
import HeaderImport from './HeaderImport'; // Importamos el mismo header
import { Filter, ShoppingCart, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
}

function ProductsPage() {
  // Estado para filtros
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  
  // Categorías de productos
  const categories: string[] = ['Todos', 'Frenos', 'Motor', 'Suspensión', 'Transmisión', 'Eléctricos'];
  
  // Productos de ejemplo
  const products: Product[] = [
    {
      id: 1,
      name: 'Kit de Frenos Premium',
      category: 'Frenos',
      price: 129.99,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=500',
      description: 'Sistema de frenos de alto rendimiento compatible con múltiples modelos'
    },
    {
      id: 2,
      name: 'Amortiguadores Deportivos',
      category: 'Suspensión',
      price: 189.99,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1582639510494-c80b5de9f148?auto=format&fit=crop&q=80&w=500',
      description: 'Mayor estabilidad y control en todo tipo de terreno'
    },
    {
      id: 3,
      name: 'Filtro de Aceite de Motor',
      category: 'Motor',
      price: 24.99,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1519752594763-2f756104b5d1?auto=format&fit=crop&q=80&w=500',
      description: 'Filtro de alta capacidad para motores de alto rendimiento'
    },
    {
      id: 4,
      name: 'Kit de Embrague',
      category: 'Transmisión',
      price: 159.99,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=500',
      description: 'Diseñado para soportar alta presión y temperatura'
    },
    {
      id: 5,
      name: 'Alternador de Alto Rendimiento',
      category: 'Eléctricos',
      price: 219.99,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1582639510494-c80b5de9f148?auto=format&fit=crop&q=80&w=500',
      description: 'Recambio de calidad OEM con garantía extendida'
    },
    {
      id: 6,
      name: 'Kit de Distribución Completo',
      category: 'Motor',
      price: 179.99,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1519752594763-2f756104b5d1?auto=format&fit=crop&q=80&w=500',
      description: 'Incluye tensor, correa y rodamientos de alta calidad'
    },
    {
      id: 7,
      name: 'Pastillas de Freno Cerámicas',
      category: 'Frenos',
      price: 89.99,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=500',
      description: 'Mayor rendimiento, menor desgaste y menor ruido'
    },
    {
      id: 8,
      name: 'Kit de Reparación de Transmisión',
      category: 'Transmisión',
      price: 249.99,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1582639510494-c80b5de9f148?auto=format&fit=crop&q=80&w=500',
      description: 'Componentes de precisión para una transmisión más suave'
    },
  ];

  // Filtrar productos según la categoría seleccionada
  const filteredProducts = activeCategory === 'Todos' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <HeaderImport />

      {/* Banner de Productos */}
      <section className="relative h-64 bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-bold mb-4">Catálogo de Productos</h1>
            <p className="text-lg">Encuentra el repuesto perfecto para tu vehículo</p>
          </div>
        </div>
      </section>

      {/* Sección de Productos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          
          {/* Filtros */}
          <div className="mb-12 flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-3xl font-bold mb-6 md:mb-0">Nuestros Productos</h2>
            
            <div className="flex items-center gap-4">
              <Filter className="text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button 
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 border ${
                      activeCategory === category 
                        ? 'bg-red-600 text-white border-red-600' 
                        : 'border-gray-300 hover:border-red-600 text-gray-700'
                    } transition-colors`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Grid de Productos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="border border-gray-200 group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-sm px-2 py-1">
                    {product.category}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center text-yellow-500 mb-2">
                    <Star size={16} fill="currentColor" />
                    <span className="ml-1 text-sm">{product.rating}</span>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">${product.price}</span>
                    <button className="bg-red-600 hover:bg-red-700 text-white p-2 transition-colors">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Paginación */}
          <div className="mt-12 flex justify-center">
            <div className="flex">
              <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
                Anterior
              </button>
              <button className="px-4 py-2 bg-red-600 text-white border border-red-600">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
                3
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Idéntico al que ya tienes en App.tsx */}
      <footer className="bg-black text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Star size={24} className="text-red-600" />
              <span className="text-white font-bold">Importadora Chambs</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-red-500 transition-colors"><Star size={20} /></a>
              <a href="#" className="hover:text-red-500 transition-colors"><Star size={20} /></a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                <Star size={20} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Importadora Chambs. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <Star size={24} />
      </a>
    </div>
  );
}

export default ProductsPage;