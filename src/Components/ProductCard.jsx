import React from "react";

const ProductCard = () => {
    return <div className="max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-1 gap-8 ">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
          <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
          </div>
          <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">Product One</h3>
              <p className="text-gray-600 mt-2">Amazing product description here</p>
              <button className="mt-4 px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition">
                  View Details
              </button>
          </div>
      </div>
  </div>;
};

export default ProductCard;
