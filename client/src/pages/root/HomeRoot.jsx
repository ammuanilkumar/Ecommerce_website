
import React from 'react';

export const HomeRoot = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative text-center bg-cover bg-center h-[400px] md:h-[600px]" style={{ backgroundImage: 'url("/images/blue_homeroot_image.jpg")' }}>
        <div className>
          <h1 className="text-3xl md:text-5xl font-bold text-white">Discover the New Collection</h1>
          <p className="text-lg md:text-xl text-gray-200 mt-2">Elegance, Style, and Comfort</p>
          <button className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600">Shop Now</button>
        </div>
      </section>

      {/* Category Highlights */}
      <section className="py-8 px-4 md:px-16 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative group">
            <img src="/images/evening_wear.jpg" alt="Evening Wear" className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform" />
            <p className="absolute inset-x-0 bottom-2 text-center text-white text-lg font-semibold bg-black bg-opacity-50 py-1">Evening Wear</p>
          </div>
          <div className="relative group">
            <img src="/images/image_summer_collection.jpg" alt="Summer Collection" className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform" />
            <p className="absolute inset-x-0 bottom-2 text-center text-white text-lg font-semibold bg-black bg-opacity-50 py-1">Summer Collection</p>
          </div>
          <div className="relative group">
            <img src="/images/product_3.jpg" alt="Casual Wear" className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform" />
            <p className="absolute inset-x-0 bottom-2 text-center text-white text-lg font-semibold bg-black bg-opacity-50 py-1">Casual Wear</p>
          </div>
          <div className="relative group">
            <img src="/images/winter_collection.jpg" alt="Winter Collection" className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform" />
            <p className="absolute inset-x-0 bottom-2 text-center text-white text-lg font-semibold bg-black bg-opacity-50 py-1">Winter Collection</p>
          </div>
          </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-8 px-4 md:px-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative group">
            <img src="/images/dress_1.jpg" alt="Product 1" className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform" />
            <p className="mt-2 text-center text-lg font-semibold">Stylish Dress </p>
          </div>
          <div className="relative group">
            <img src="/images/dress_2.jpg" alt="Product 2" className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform" />
            <p className="mt-2 text-center text-lg font-semibold">Elegant Dress </p>
          </div>
          <div className="relative group">
            <img src="/images/chic_dress.jpg" alt="chic Dress" className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform" />
            <p className="mt-2 text-center text-lg font-semibold">Chic Dress</p>
          </div>
          <div className="relative group">
            <img src="/images/classic_dress_2.jpg" alt=" Classic Dress" className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform" />
            <p className="mt-2 text-center text-lg font-semibold">Classic Dress</p>
          </div>
        </div>
      </section>
    </div>
  );
};





