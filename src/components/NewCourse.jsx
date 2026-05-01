

import React from "react";
import { FaStar } from "react-icons/fa";

const NewCourse = async () => {
  const res = await fetch(
    "https://skill-sphere-kappa.vercel.app/course.json"
  );
  const photos = await res.json();

  return (
    <div className="bg-pink-100 pb-10">
      <div className="max-w-7xl mx-auto px-4">

        <div className="shadow rounded-2xl bg-white py-8 px-4 sm:px-6 md:px-10 text-center space-y-8">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            🏆 Top Instructors Section
          </h2>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {photos.map((photo) => (
              <div
                key={photo.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
              >
                
                
                {/* Content */}
                <div className="p-4 space-y-3 text-left">
                  <h2 className="text-lg font-bold">
                    {photo.title}
                  </h2>

                  <p className="text-gray-800 font-medium">
                    {photo.category}
                  </p>

                  <p className="text-gray-600 font-medium">
                    {photo.description}
                  </p>

                  <p className="flex items-center gap-2 font-semibold">
                    <FaStar className="text-yellow-500" />
                    {photo.rating}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
};


export default NewCourse;