import AllCoursesClient from "./searchInput/page";


const AllCoursesPage = async () => {
  const res = await fetch(
    "https://skill-sphere-kappa.vercel.app/data.json",
    { cache: "no-store" }
  );
  const photos = await res.json();

  return (
    <div className="bg-pink-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        <h2 className="text-4xl font-bold mb-10 animate__animated animate__slideInLeft">
          All Courses
        </h2>

        {/* 👇 Client component gets data */}
        <AllCoursesClient photos={photos} />

      </div>
    </div>
  );
};

export default AllCoursesPage;