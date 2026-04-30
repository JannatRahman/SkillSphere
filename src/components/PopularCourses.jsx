import CourseCard from "./CourseCard";

const PopularCourses = async () => {
  const res = await fetch("https://skill-sphere-kappa.vercel.app/data.json");
const photos = await res.json();

const popularCourse = [...photos]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3);

  return (
    <div className="bg-pink-100 my-10 py-10 rounded-lg">
      
      <div className="max-w-7xl mx-auto px-4">
        
        <h2 className="text-4xl font-bold py-6 animate__animated animate__slideInLeft">
          🔥 Popular Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate__animated animate__zoomIn">
          {popularCourse.map((photo) => (
            <CourseCard key={photo.id} photo={photo} />
          ))}
        </div>

      </div>

    </div>
  );
};

export default PopularCourses;