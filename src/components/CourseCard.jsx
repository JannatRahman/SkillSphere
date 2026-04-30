import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const CourseCard = ({photo}) => {
  return (
  <Card className="shadow h-full flex flex-col">
  
  <div className="relative w-full h-[200px]">
    <Image
      src={photo.image}
      alt={photo.title}
      fill
      className="object-cover rounded-lg"
    />
  </div>

  <div className="p-3 flex flex-col flex-1 justify-between space-y-2">
    <div>
      <h2 className="text-lg font-bold">{photo.title}</h2>
      <p className="font-semibold">{photo.instructor}</p>
      <p className="flex items-center gap-2 font-semibold">
        <FaStar className="text-yellow-500" />
        {photo.rating}
      </p>
    </div>

    <Link href={`/all-courses/${photo.id}`}>
    <Button variant="outline" className="w-full mt-3">
      Details
    </Button>
    </Link>
  </div>

</Card>
   
   
  );
};

export default CourseCard;