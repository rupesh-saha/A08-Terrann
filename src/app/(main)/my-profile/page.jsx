import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MyProfilePage = () => {
  // Hardcoded dummy data for now until you wire up your backend auth
  const user = {
    name: "John Doe",
    email: "hello@example.com",
    photoURL: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Minimalist Header */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-12">
          My Profile.
        </h1>

        {/* Premium Profile Card */}
        <div className="bg-white border border-gray-100 p-10 shadow-sm flex flex-col items-center">
          
          {/* Avatar - Kept perfectly square to match your tile aesthetic */}
          <div className="w-32 h-32 relative mb-6">
            <Image 
              src={user.photoURL}
              alt={user.name}
              fill
              className="object-cover border border-gray-200"
            />
          </div>

          {/* User Info */}
          <h2 className="text-2xl font-bold text-gray-900 mb-1">{user.name}</h2>
          <p className="text-sm text-gray-500 mb-10 tracking-wide">{user.email}</p>

          {/* Fulfills Assignment Req: The "Update" Button linking to another route */}
          <Link 
            href="/my-profile/update"
            className="btn w-full max-w-xs bg-[#141311] text-white hover:bg-gray-800 border-none rounded-none text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300"
          >
            Update Profile
          </Link>
          
        </div>

      </div>
    </div>
  );
}

export default MyProfilePage;