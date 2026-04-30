import CourseCard from "./CourseCard";


const PopularCourses =async () => {
  const res = await fetch('https://skill-sphere-kappa.vercel.app/data.json');
  const photos = await res.json();
  const popularCourse = photos.slice(0, 3)

  return (
    <div>
      <h2 className="text-4xl font-bold">🔥 Popular Courses</h2>

      <div>
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