import { Button } from '@heroui/react';
import React from 'react';

const Banner = () => {
  return (
   
    <div className=' max-w-7xl mx-auto'>
      <div className='bg-white rounded-lg mt-5'>
        <h2 className='text-3xl font-bold p-2'>🎓 SkillSphere – Online Learning Platform
        </h2>
        <p className='p-4 text-gray-700'>🎥 A modern online learning platform where users can explore courses, <br /> watch lessons, and enroll in skill-based programs like Web Development, <br /> Design, Marketing, and more.</p>

        <div>
          <Button variant="danger">Danger</Button>
          <Button variant="danger">Danger</Button>
        </div>

      </div>

      <div>

      </div>
    

    </div>
  );
};

export default Banner;