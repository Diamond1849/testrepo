import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Apple as WhatsApp, Search, Menu, Car, PenTool as Tool, Shield, Clock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="hidden md:flex justify-between py-2 text-sm border-b border-gray-800">
            <div className="flex gap-6">
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-red-500 transition-colors">
                <Phone size={16} />
                <span>+1 (234) 567-890</span>
              </a>
              <a href="mailto:info@importadorachambs.com" className="flex items-center gap-2 hover:text-red-500 transition-colors">
                <Mail size={16} />
                <span>info@importadorachambs.com</span>
              </a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-red-500 transition-colors"><Facebook size={16} /></a>
              <a href="#" className="hover:text-red-500 transition-colors"><Instagram size={16} /></a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                <WhatsApp size={16} />
              </a>
            </div>
          </div>
          
          {/* Main Navigation */}
          <nav className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Car size={32} className="text-red-600" />
                <span className="text-2xl font-bold">Importadora Chambs</span>
              </div>
              
              <div className="hidden md:flex items-center gap-8">
                <a href="#" className="hover:text-red-500 transition-colors">Inicio</a>
                <a href="#" className="hover:text-red-500 transition-colors">Productos</a>
                <a href="#" className="hover:text-red-500 transition-colors">Servicios</a>
                <a href="#" className="hover:text-red-500 transition-colors">Nosotros</a>
                <a href="#" className="hover:text-red-500 transition-colors">Contacto</a>
              </div>
              
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-red-600 hover:text-white rounded-full transition-colors">
                  <Search size={20} />
                </button>
                <button className="md:hidden p-2 hover:bg-red-600 hover:text-white rounded-full transition-colors">
                  <Menu size={20} />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Repuestos de Calidad para tu Vehículo</h1>
            <p className="text-xl mb-8">Importamos las mejores marcas directamente para ti. Calidad garantizada en cada pieza.</p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-none text-lg font-semibold transition-colors">
              Conoce Nuestros Productos
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-none flex items-center justify-center mx-auto mb-4">
                <Tool className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Calidad Premium</h3>
              <p className="text-gray-600">Importamos solo repuestos originales y de alta calidad de fabricantes certificados.</p>
            </div>
            <div className="text-center p-6 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-none flex items-center justify-center mx-auto mb-4">
                <Shield className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Garantía Asegurada</h3>
              <p className="text-gray-600">Todos nuestros productos cuentan con garantía internacional.</p>
            </div>
            <div className="text-center p-6 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-none flex items-center justify-center mx-auto mb-4">
                <Clock className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">Coordinación eficiente y seguimiento en tiempo real de tu pedido.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Productos Destacados</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-900 overflow-hidden group">
                <img 
                  src={`https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=500`}
                  alt="Repuesto automotriz"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Kit de Frenos Premium</h3>
                  <p className="text-gray-400 text-sm mb-4">Sistema de frenos de alto rendimiento compatible con múltiples modelos</p>
                  <button className="w-full bg-red-600 text-white px-4 py-2 hover:bg-red-700 transition-colors">
                    Más Información
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
              <p className="mb-8">¿Necesitas ayuda para encontrar el repuesto adecuado? Nuestro equipo está aquí para asesorarte.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="text-red-600" />
                  <span>Calle Principal #123, Ciudad</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-red-600" />
                  <span>+1 (234) 567-890</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-red-600" />
                  <span>info@importadorachambs.com</span>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Tu Nombre"
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-red-500"
              />
              <input
                type="email"
                placeholder="Tu Email"
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-red-500"
              />
              <textarea
                placeholder="Tu Mensaje"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-red-500"
              ></textarea>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-semibold transition-colors w-full">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Car size={24} className="text-red-600" />
              <span className="text-white font-bold">Importadora Chambs</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-red-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-red-500 transition-colors"><Instagram size={20} /></a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                <WhatsApp size={20} />
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
        <WhatsApp size={24} />
      </a>
    </div>
  );
}

export default App;