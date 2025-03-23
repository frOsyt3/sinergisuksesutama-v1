import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Digital Transformation',
      client: 'Tech Corp Indonesia',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
    },
    {
      title: 'Business Analytics Platform',
      client: 'Data Insights Co',
      category: 'Analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
    },
    {
      title: 'Enterprise Integration',
      client: 'Global Solutions',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80'
    },
    {
      title: 'Cloud Migration',
      client: 'CloudTech Asia',
      category: 'Cloud Services',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-light mb-8">Our Work</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Showcasing our commitment to excellence through successful projects and partnerships.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center text-white">
                        <p className="text-sm uppercase tracking-wider mb-2">{project.category}</p>
                        <h3 className="text-2xl font-light mb-2">{project.title}</h3>
                        <p className="text-gray-300">{project.client}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light mb-8">Start Your Project</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to transform your business? Let's create something amazing together.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}