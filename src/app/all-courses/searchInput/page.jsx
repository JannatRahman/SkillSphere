"use client";

import React, { useState } from "react";
import CourseCard from "@/components/CourseCard";

const AllCoursesClient = ({ photos }) => {
  const [search, setSearch] = useState("");

  const filteredCourses = (photos || [] ).filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/*  Search Input */}
      <input
        type="text"
        placeholder="Search course..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 mb-8 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-400"
      />

      {/*  Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((photo) => (
          <CourseCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllCoursesClient;