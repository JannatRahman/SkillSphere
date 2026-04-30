import CourseCard from '@/components/CourseCard';
import React from 'react';

const AllCoursesPage =async () => {
  const res = await fetch('https://skill-sphere-kappa.vercel.app/data.json');
  const photos = await res.json();
  return (
   <div className='bg-pink-100 shadow h-full flex flex-col'>
     <div className='max-w-7xl mx-auto bg-pink-100'>
      <h2 className='text-4xl font-bold py-10 '>All Courses</h2>

      <div className='grid grid-cols-3 gap-5'>
        {
          photos.map(photo => <CourseCard key={photo.id} photo={photo}/>)
        }
      </div>
    </div>
   </div>
  );
};

export default AllCoursesPage;