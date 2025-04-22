import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, Car } from 'lucide-react';

const HeaderImport = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Función para manejar el scroll y añadir sombra al header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Limpieza del event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-black text-white fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4">
        {/* Main Navigation */}
        <nav className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Car size={32} className="text-red-600" />
              <Link to="/" className="text-2xl font-bold hover:text-red-500 transition-colors">Importadoras Chambs</Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="hover:text-red-500 transition-colors">Inicio</Link>
              <Link to="/productos" className="hover:text-red-500 transition-colors">Productos</Link>
              <a href="#" className="hover:text-red-500 transition-colors">Servicios</a>
              <a href="#" className="hover:text-red-500 transition-colors">Nosotros</a>
              <a href="#" className="hover:text-red-500 transition-colors">Contacto</a>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-red-600 hover:text-white rounded-full transition-colors">
                <Search size={20} />
              </button>
              <button 
                className="md:hidden p-2 hover:bg-red-600 hover:text-white rounded-full transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu - Fixed overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-black border-t border-gray-800 h-screen">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-6 text-lg">
              <Link 
                to="/" 
                className="py-2 hover:text-red-500 transition-colors border-b border-gray-800" 
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                to="/productos" 
                className="py-2 hover:text-red-500 transition-colors border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </Link>
              <a href="#" className="py-2 hover:text-red-500 transition-colors border-b border-gray-800">
                Servicios
              </a>
              <a href="#" className="py-2 hover:text-red-500 transition-colors border-b border-gray-800">
                Nosotros
              </a>
              <a href="#" className="py-2 hover:text-red-500 transition-colors border-b border-gray-800">
                Contacto
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderImport;