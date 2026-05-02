import React from "react";
import { FaBookOpen, FaChalkboardTeacher, FaClock, FaCertificate } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <FaBookOpen />,
      title: "Premium Courses",
      description:
        "Access high-quality courses designed by experts to help you master real-world skills faster.",
    },
    {
      id: 2,
      icon: <FaChalkboardTeacher />,
      title: "Expert Mentors",
      description:
        "Learn from experienced instructors who guide you step by step throughout your learning journey.",
    },
    {
      id: 3,
      icon: <FaClock />,
      title: "Flexible Learning",
      description:
        "Study anytime, anywhere at your own pace with lifetime access to your favorite courses.",
    },
    {
      id: 4,
      icon: <FaCertificate />,
      title: "Certified Success",
      description:
        "Earn certificates after course completion to showcase your skills and boost your career growth.",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 py-16 overflow-hidden">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-rose-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-white rounded-full blur-3xl opacity-20"></div>

      {/* Floating Icons */}
      <div className="absolute top-20 right-20 text-4xl animate-bounce">
        ✨
      </div>
      <div className="absolute bottom-20 left-16 text-3xl animate-pulse">
        🎯
      </div>
      <div className="absolute top-1/3 left-8 text-3xl animate-bounce">
        📚
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        
        <div className="bg-white/80 backdrop-blur-lg border border-white/40 rounded-3xl shadow-2xl py-10 px-6 sm:px-8 md:px-12">
          
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="inline-block px-4 py-2 rounded-full bg-pink-100 text-pink-600 font-semibold text-sm mb-4">
              🚀 Why Students Love Us
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
              💖 Why Choose Us
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              We provide everything you need to grow your skills, build your
              future, and achieve success with confidence.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-pink-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <div className="text-4xl text-pink-500 flex justify-center mb-4">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;