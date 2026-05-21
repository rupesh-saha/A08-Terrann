'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { authClient } from '@/lib/auth-client';


const MyProfilePage = () => {
  const { data: session, isPending } = authClient.useSession()
  const user = session?.user;

  if (isPending || !session) {
    return (
      <div className="min-h-screen bg-[#fcfcfc] pt-32 pb-24 flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-gray-900"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fcfcfc] pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-12">
          My Profile.
        </h1>

        <div className="bg-white border border-gray-100 p-10 shadow-sm flex flex-col items-center">
          
          <div className="w-32 h-32 relative mb-6">
            <Image 
              src={session.user.image}
              alt={session.user.name}
              width={500}
              height={500}
              className="object-cover border border-gray-200"
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-1">{user.name}</h2>
          <p className="text-sm text-gray-500 mb-10 tracking-wide">{user.email}</p>

          <Link href="/my-profile/update" className="btn w-full max-w-xs bg-[#141311] text-white hover:bg-gray-800 border-none rounded-none text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300">
            Update Profile
          </Link>
          
        </div>

      </div>
    </div>
  );
}

export default MyProfilePage;