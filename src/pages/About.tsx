import React from 'react';

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <div className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-light mb-8">About Us</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            We are a team of innovators, strategists, and problem solvers dedicated to 
            transforming businesses through technology and strategic solutions.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light mb-6">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading force in business transformation, empowering organizations 
                to thrive in the digital age through innovative solutions and strategic excellence.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-light mb-6">Our Mission</h2>
              <p className="text-gray-600">
                To deliver exceptional value to our clients through cutting-edge solutions, 
                fostering long-term partnerships, and driving sustainable growth through 
                innovation and expertise.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Innovation',
                description: 'We embrace change and continuously seek new ways to create value'
              },
              {
                title: 'Excellence',
                description: 'We maintain the highest standards in everything we do'
              },
              {
                title: 'Integrity',
                description: 'We build trust through transparency and ethical practices'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-light mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-center mb-16">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="aspect-square relative group">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                alt="Team member"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-light">John Doe</h3>
                  <p className="text-sm text-gray-300">CEO & Founder</p>
                </div>
              </div>
            </div>
            <div className="aspect-square relative group">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
                alt="Team member"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-light">Jane Smith</h3>
                  <p className="text-sm text-gray-300">Creative Director</p>
                </div>
              </div>
            </div>
            <div className="aspect-square relative group">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
                alt="Team member"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl font-light">Mike Johnson</h3>
                  <p className="text-sm text-gray-300">Technical Lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}