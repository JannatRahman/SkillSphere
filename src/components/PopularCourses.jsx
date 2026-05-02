import CourseCard from "./CourseCard";

const PopularCourses = async () => {
  const res = await fetch("https://skill-sphere-kappa.vercel.app/data.json");
  const photos = await res.json();

  const popularCourse = [...photos]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="bg-pink-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="bg-white rounded-3xl shadow-lg py-10 px-6 sm:px-8 md:px-10">
          
          {/* Section Heading */}
          <div className="text-center mb-10">
            <p className="inline-block px-4 py-2 rounded-full bg-pink-100 text-pink-600 font-semibold text-sm mb-4">
              🚀 Most Loved by Students
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              🔥 Popular Courses
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Discover our top-rated courses chosen by students for quality,
              practical learning, and career growth opportunities.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCourse.map((photo) => (
              <div
                key={photo.id}
                className="bg-pink-50 rounded-2xl shadow-sm hover:shadow-md transition duration-300 hover:-translate-y-1"
              >
                <CourseCard photo={photo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;