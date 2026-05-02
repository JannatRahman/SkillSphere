import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import womenImg from "../assets/woman .png";
import Link from "next/link";

export const metadata = {
  title: "SkillSphere | Home",
};

const Banner = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 overflow-hidden">
      
      {/* Decorative Background Blur Circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-rose-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-white rounded-full blur-3xl opacity-20"></div>

      {/* Floating Small Shapes */}
      <div className="absolute top-20 right-20 text-4xl animate-bounce">
        ✨
      </div>
      <div className="absolute bottom-24 left-16 text-3xl animate-pulse">
        🎯
      </div>
      <div className="absolute top-1/3 left-8 text-3xl animate-bounce">
        📚
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex items-center min-h-screen">
        
        <div className="bg-white/80 backdrop-blur-lg border border-white/40 rounded-3xl flex flex-col-reverse lg:flex-row items-center justify-between shadow-2xl overflow-hidden w-full">
          
          {/* Left Content */}
          <div className="p-6 sm:p-10 lg:p-14 text-center lg:text-left flex-1">
            
            <p className="inline-block px-4 py-2 rounded-full bg-pink-100 text-pink-600 font-semibold text-sm mb-4">
              🚀 Learn. Grow. Succeed.
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-800">
              🎓 SkillSphere <br />
              <span className="text-pink-500">
                Online Learning Platform
              </span>
            </h2>

            <p className="pt-6 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
              A modern online learning platform where users can explore
              premium courses, watch lessons, and enroll in skill-based
              programs like Web Development, UI/UX Design, Marketing,
              Programming, and much more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center lg:justify-start">

              
              <Button
                variant="solid"
                className="w-full sm:w-auto bg-pink-500 text-white font-semibold px-8 py-6 rounded-xl shadow-lg hover:scale-105 transition duration-300"
              >
                Get Started
              </Button>
              
             
              

              <Link href={'/all-courses'}>
              <Button
                variant="bordered"
                className="w-full sm:w-auto border-2 border-pink-400 text-pink-500 font-semibold px-8 py-6 rounded-xl hover:bg-pink-50 transition duration-300"
              >
                View Courses
              </Button>
              
              </Link>

            </div>

            {/* Small Stats */}
            <div className="flex flex-wrap gap-6 pt-10 justify-center lg:justify-start">
              <div>
                <h3 className="text-2xl font-bold text-pink-500">10K+</h3>
                <p className="text-sm text-gray-500">Students</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-pink-500">150+</h3>
                <p className="text-sm text-gray-500">Courses</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-pink-500">50+</h3>
                <p className="text-sm text-gray-500">Expert Mentors</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center lg:justify-end relative p-6">
            
            {/* Glow Behind Image */}
            <div className="absolute w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] bg-pink-200 rounded-full blur-3xl opacity-40"></div>

            <Image
              src={womenImg}
              alt="woman"
              width={550}
              height={550}
              priority
              className="relative w-[260px] sm:w-[380px] lg:w-[550px] h-auto animate__animated animate__fadeInRight"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;