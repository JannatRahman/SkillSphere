import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import womenImg from "../assets/woman .png";

export const metadata = {
  title: "SkillSphere | Home",
  
};

const Banner = () => {
  return (
    <div className="min-h-screen bg-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg flex flex-col-reverse lg:flex-row items-center justify-between shadow-md animate__animated animate__pulse overflow-hidden">
          
          {/* Left Content */}
          <div className="p-6 sm:p-10 lg:p-14 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
              🎓 SkillSphere – Online Learning Platform
            </h2>

            <p className="pt-4 text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
              🎥 A modern online learning platform where users can explore
              courses, watch lessons, and enroll in skill-based programs like
              Web Development, Design, Marketing, and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-6 justify-center lg:justify-start">
              <Button
                variant="danger"
                className="w-full sm:w-auto"
              >
                Get Started
              </Button>

              <Button
                variant="outline"
                className="w-full sm:w-auto"
              >
                View Courses
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full flex justify-center lg:justify-end">
            <Image
              src={womenImg}
              alt="woman"
              width={500}
              height={500}
              priority
              className="w-[250px] sm:w-[350px] lg:w-[500px] h-auto animate__animated animate__slideInRight"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;