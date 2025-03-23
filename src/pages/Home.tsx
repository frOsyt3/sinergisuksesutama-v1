import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Hero Section */}
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
              alt="Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
                SINERGI SUKSES UTAMA
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Creating Innovative Solutions for Tomorrow
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-light text-center mb-16">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Digital Transformation',
                  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
                  category: 'Business Solutions'
                },
                {
                  title: 'Enterprise Integration',
                  image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80',
                  category: 'Technology'
                }
              ].map((project, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center text-white">
                          <p className="text-sm uppercase tracking-wider mb-2">{project.category}</p>
                          <h3 className="text-2xl font-light">{project.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-24 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-light text-center mb-16">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: 'Business Consulting',
                  description: 'Strategic planning and optimization for sustainable growth'
                },
                {
                  title: 'Digital Solutions',
                  description: 'Innovative technology solutions for modern businesses'
                },
                {
                  title: 'Project Management',
                  description: 'End-to-end project execution and delivery'
                }
              ].map((service, index) => (
                <div key={index} className="text-center group">
                  <h3 className="text-xl font-light mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Preview */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-light mb-8">Who We Are</h2>
                <p className="text-gray-600 mb-8">
                  CV. SINERGI SUKSES UTAMA is a forward-thinking company dedicated to delivering 
                  innovative solutions that drive business success. Based in Bandung, we combine 
                  local expertise with global perspectives.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center text-black hover:text-gray-600 transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                  alt="Team"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}