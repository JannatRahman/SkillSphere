import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import womenImg from '../assets/woman .png'


const Banner = () => {
  return (
   
    <div className=' max-w-7xl mx-auto flex'>
      <div className='bg-white rounded-lg mt-5 flex animate__animated animate__pulse '>
        <div className='p-14'>
          <h2 className='text-4xl font-bold p-2'>🎓 SkillSphere – Online Learning Platform
        </h2>
        <p className='p-4 text-gray-700'>🎥 A modern online learning platform where users can explore courses, <br /> watch lessons, and enroll in skill-based programs like Web Development, <br /> Design, Marketing, and more.</p>

        <div className=' flex gap-3 p-4'>
          <Button variant="danger">Get Started</Button>
          <Button variant="outline">View Courses</Button>
        </div>
        </div>

      <div>
        <Image 
        src={womenImg}
        alt='woman'
        width={500}
        height={500}
        className='animate__animated animate__slideInRight pr-5'
        >

        </Image>
      </div>
      </div>


    

    </div>
  );
};

export default Banner;