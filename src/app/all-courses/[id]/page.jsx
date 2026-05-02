import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

export const metadata = {
  title: "SkillSphere |",
  
};

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    "https://skill-sphere-kappa.vercel.app/data.json"
  );
  const photos = await res.json();

  const photo = photos.find((p) => p.id == id);

  return (
    <div className="bg-pink-100 min-h-screen py-10 px-4 animate__animated animate__zoomIn">
      <div className="max-w-5xl mx-auto">
        <Card className="shadow-lg rounded-2xl overflow-hidden">

          {/* Responsive Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">

            {/* Image Section */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-full min-h-[300px]">
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-between space-y-4">

              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-3">
                  {photo.title}
                </h2>

                <p className="text-lg font-semibold mb-2">
                  Instructor: {photo.instructor}
                </p>

                <p className="text-md text-gray-600 mb-2">
                  Duration: {photo.duration}
                </p>

                <p className="text-md text-gray-600 mb-2">
                  Level: {photo.level}
                </p>
                <p className="text-md text-gray-600 mb-2">
                  Level: {photo.category}
                </p>

                <p className="flex items-center gap-2 font-semibold text-lg mb-4">
                  <FaStar className="text-yellow-500" />
                  {photo.rating}
                </p>

                <p className="text-gray-700 leading-relaxed">
                  {photo.description}
                </p>
              </div>

              {/* Back Button */}
              <Link href="/all-courses">
                <Button
                  variant="solid"
                  className="w-full mt-4"
                >
                  Back to Courses
                </Button>
              </Link>

            </div>
          </div>

        </Card>
      </div>
    </div>
  );
};

export default CourseDetailsPage;