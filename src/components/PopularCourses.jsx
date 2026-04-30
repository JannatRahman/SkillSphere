import CourseCard from "./CourseCard";


const PopularCourses =async () => {
  const res = await fetch('https://skill-sphere-kappa.vercel.app/data.json');
  const photos = await res.json();
  const popularCourse = photos.slice(0, 3)

  return (
    <div className="bg-white mt-5  max-w-7xl mx-auto rounded-lg my-5">
      <h2 className="text-4xl font-bold py-4">🔥 Popular Courses</h2>

      <div className="grid grid-cols-3 gap-5 max-w-7xl mx-auto ">
        {
          popularCourse.map(photo => 
            
            <CourseCard
            key={photo.id}
            photo={photo}
            />
          )
        }
      </div>
    </div>
  );
};

export default PopularCourses;