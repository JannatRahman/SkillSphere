import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const TrendingCourse = async () => {
  const res = await fetch(
    "https://skill-sphere-kappa.vercel.app/course.json"
  );
  const photos = await res.json();
  return (
    <div className="bg-pink-100 py-12">
      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-white rounded-3xl shadow-lg py-10 px-6 sm:px-8 md:px-10">

          {/* Section Heading */}
          <div className="text-center mb-10">
            <p className="inline-block px-4 py-2 rounded-full bg-pink-100 text-pink-600 font-semibold text-sm mb-4">
              🌟 Explore Our Trending Course
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Trending Course
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Learn from highly skilled instructors who are passionate about
              teaching and helping students grow their future.
            </p>
          </div>

          {/* Instructor Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">

            {photos.map((photo) => (
              <div
                key={photo.id}
                className="bg-pink-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative w-full h-64">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5 text-left space-y-3">
                  <h3 className="text-lg font-bold text-gray-800">
                    {photo.title}
                  </h3>

                  <p className="text-pink-500 font-medium">
                    {photo.category}
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {photo.description}
                  </p>

                  <p className="flex items-center gap-2 font-semibold text-gray-700">
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

export default TrendingCourse;