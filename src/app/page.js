import Banner from "@/components/Banner";
import CourseCard from "@/components/CourseCard";
import PopularCourses from "@/components/PopularCourses";


export default function Home() {
  return (
    <div className="bg-pink-100">
     <Banner/>
     <PopularCourses/>
     

    </div>
  );
}
