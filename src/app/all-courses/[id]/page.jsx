import React from 'react';

const CourseDetailsPage =async ({params}) => {
  const {id} = await params;

  const res = await fetch("https://skill-sphere-kappa.vercel.app/data.json");
  const photos = await res.json();
  const photo = photos.find(p => p.id == id);
  
  return (
    <div>
      details
    </div>
  );
};

export default CourseDetailsPage;