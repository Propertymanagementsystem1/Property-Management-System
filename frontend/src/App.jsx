import React from "react";

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center p-6 bg-white rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Tailwind CSS is Working!
        </h1>
        <p className="mb-6 text-gray-700">
          This is a React + Vite + Tailwind setup running smoothly.
        </p>
        <button className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-700 transition">
          Test Button
        </button>
      </div>
    </div>
  );
}
