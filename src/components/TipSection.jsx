import React from "react";
import { FaBookReader, FaClock, FaLightbulb } from "react-icons/fa";
import books from "@/assets/books.png";
import computer from "@/assets/computer.png";
import Image from "next/image";

const TipSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 py-16 overflow-hidden">
      
      {/* Decorative Background Blur */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-rose-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-white rounded-full blur-3xl opacity-20"></div>

      {/* Floating Icons */}
      <div className="absolute top-20 right-20 text-4xl animate-bounce">
        📚
      </div>
      <div className="absolute bottom-20 left-16 text-3xl animate-pulse">
        ✨
      </div>
      <div className="absolute top-1/3 left-8 text-3xl animate-bounce">
        🎯
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        
        <div className="bg-white/80 backdrop-blur-lg border border-white/40 shadow-2xl rounded-3xl py-10 px-6 sm:px-8 md:px-12">
          
          {/* Top Badge */}
          <div className="text-center">
            <p className="inline-block px-4 py-2 rounded-full bg-pink-100 text-pink-600 font-semibold text-sm mb-4">
              🚀 Smart Learning Strategies
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
              📌 Learning Tips Section
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Improve your learning journey with effective study methods,
              better focus, and smart time management strategies.
            </p>
          </div>

          {/* Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-12">
            
            {/* Left Side Image */}
            <div className="flex justify-center relative">
              <div className="absolute w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] bg-pink-200 rounded-full blur-3xl opacity-40"></div>

              <Image
                src={books}
                alt="books"
                width={400}
                height={400}
                className="relative w-[250px] sm:w-[320px] md:w-[400px] h-auto animate__animated animate__fadeInLeft"
              />
            </div>

            {/* Right Side Tips */}
            <div className="space-y-6">
              
              <div className="bg-pink-50 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-300">
                <p className="flex items-center gap-4 text-lg font-semibold text-gray-700">
                  <FaBookReader className="text-pink-500 text-2xl" />
                  Study Techniques
                </p>
                <p className="text-gray-500 mt-2 text-sm">
                  Use active recall, spaced repetition, and note summarization
                  for stronger memory retention.
                </p>
              </div>

              <div className="bg-pink-50 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-300">
                <p className="flex items-center gap-4 text-lg font-semibold text-gray-700">
                  <FaClock className="text-pink-500 text-2xl" />
                  Time Management Tips
                </p>
                <p className="text-gray-500 mt-2 text-sm">
                  Follow the Pomodoro technique and daily planning to improve
                  focus and productivity.
                </p>
              </div>

              <div className="bg-pink-50 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-300">
                <p className="flex items-center gap-4 text-lg font-semibold text-gray-700">
                  <FaLightbulb className="text-pink-500 text-2xl" />
                  Smart Learning Habits
                </p>
                <p className="text-gray-500 mt-2 text-sm">
                  Build consistency, avoid multitasking, and revise regularly
                  for long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipSection;