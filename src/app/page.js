import Banner from "@/components/Banner";
import CourseCard from "@/components/CourseCard";
import InstructorSection from "@/components/InstructorSection";
import NewCourse from "@/components/WhyChooseUs";
import PopularCourses from "@/components/PopularCourses";
import TipSection from "@/components/TipSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrendingCourse from "@/components/TrendingCourse";


export default function Home() {
  return (
    <div className="bg-pink-100">
     <Banner/>
     <PopularCourses/>
     <TipSection/>
     <InstructorSection/>
     <TrendingCourse/>
     <WhyChooseUs/>
     

    </div>
  );
}
