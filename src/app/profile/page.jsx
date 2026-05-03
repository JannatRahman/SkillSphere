'use client';

import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import girl from '@/assets/animegirl.png';
import { UpdateUserModal } from '@/components/UpdateUserModal';

const Profile = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="bg-rose-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <h2 className='text-center text-4xl font-bold'>Welcome to SkillSphere</h2>
      <p className='text-center pt-3 text-muted pb-6'>Manage your account status</p>
      <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto flex flex-col items-center border rounded-2xl shadow-lg p-6 sm:p-8 animate__animated animate__pulse">
        
        {/* Avatar */}
        <Avatar className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28">
          <Avatar.Image
            src={user?.image}
            alt="Profile Image"
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback className="text-xl font-bold">
            {user?.name?.charAt(0) || 'U'}
          </Avatar.Fallback>
        </Avatar>

        {/* User Info */}
        <div className="text-center mt-4 space-y-2">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold break-words">
            {user?.name || 'User Name'}
          </h2>

          <p className="text-sm sm:text-base text-gray-600 break-all">
            {user?.email || 'user@email.com'}
          </p>
        </div>

        {/* Update Modal */}
        <div className="mt-6 w-full flex justify-center">
          <UpdateUserModal />
        </div>
      </Card>
    </div>
  );
};

export default Profile;