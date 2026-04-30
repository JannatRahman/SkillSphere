import React from "react";
import { FaBookReader, FaClock } from "react-icons/fa";

const TipSection = () => {
  return (
    <div className="bg-pink-100 pb-10">
      <div className="max-w-7xl mx-auto px-4">

        <div className="shadow rounded-2xl bg-white py-8 px-4 sm:px-6 md:px-10 text-center space-y-6">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            📌 Learning Tips Section
          </h2>

          <div className="space-y-4">

            <p className="flex items-center justify-center gap-3 text-base sm:text-lg text-gray-700">
              <FaBookReader />
              Study techniques
            </p>

            <p className="flex items-center justify-center gap-3 text-base sm:text-lg text-gray-700">
              <FaClock />
              Time management tips
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default TipSection;