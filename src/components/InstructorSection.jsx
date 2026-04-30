import React from 'react';

const InstructorSection = async () => {
  const res = await fetch(
    "https://skill-sphere-kappa.vercel.app/category.json"
  );
  const photos = await res.json();
  return (
    <div className="bg-pink-100 pb-10">
      <div className="max-w-7xl mx-auto px-4">

        <div className="shadow rounded-2xl bg-white py-8 px-4 sm:px-6 md:px-10 text-center space-y-6">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            🏆 Top Instructors Section
          </h2>

         <div>
          {
            photos.map(photo => <div key={photo.id}>
              {photo.image}

            </div>)
          }
         </div>


        </div>

      </div>
    </div>
  );
};

export default InstructorSection;