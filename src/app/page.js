import Banner from "@/components/Banner";
import CourseCard from "@/components/CourseCard";
import InstructorSection from "@/components/InstructorSection";
import NewCourse from "@/components/NewCourse";
import PopularCourses from "@/components/PopularCourses";
import TipSection from "@/components/TipSection";


export default function Home() {
  return (
    <div className="bg-pink-100">
     <Banner/>
     <PopularCourses/>
     <TipSection/>
     <InstructorSection/>
     <NewCourse/>
     

    </div>
  );
}
