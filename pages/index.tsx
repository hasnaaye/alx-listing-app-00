import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('public/assets/c811f30edfff8de9c9b079139dd9782018c7e7c0.jpg')`
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find your favorite place here!
        </h1>
        <p className="text-lg md:text-xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </div>
    </section>
  );
};

export default Hero;
