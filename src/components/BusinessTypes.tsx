import React from 'react';

export default function BusinessTypes() {
  return (
    <section className="py-20 bg-dark-lighter/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Perfect for businesses like:</h2>
          <div className="grid grid-cols-4 gap-2 md:gap-4">
            {[
              { icon: '🏠', text: 'Property' },
              { icon: '🏨', text: 'Hotels' },
              { icon: '🛍️', text: 'Retail' },
              { icon: '🍽️', text: 'Food' },
              { icon: '🎓', text: 'Study' },
              { icon: '💆‍♀️', text: 'Beauty' },
              { icon: '🏥', text: 'Health' },
              { icon: '🚗', text: 'Auto' },
              { icon: '✈️', text: 'Travel' },
              { icon: '👗', text: 'Fashion' },
              { icon: '🏢', text: 'Service' },
              { icon: '📦', text: 'Cargo' },
            ].map((item, index) => (
              <div key={index} className="p-2 md:p-4 bg-dark-card rounded-lg hover:bg-dark-lighter transition-all hover:scale-105 hover:shadow-glow cursor-pointer flex flex-col items-center">
                <span className="text-2xl md:text-3xl mb-1">{item.icon}</span>
                <p className="text-sm md:text-xl">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}