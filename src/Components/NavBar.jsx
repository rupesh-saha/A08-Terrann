'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const NavBar = () => {
  const { data: session, isPending } = authClient.useSession()
  const user = session?.user;

  return (
    <div className="navbar rounded-2xl max-w-[97%] mx-auto bg-black/40 backdrop-blur-md border border-white/10 fixed top-3 left-0 right-0 z-50 text-white shadow-xl">
      
      <div className="navbar-start lg:w-1/3">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100/90 backdrop-blur-md rounded-box z-1 mt-3 w-52 p-2 shadow text-black">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/all-tiles">All Tiles</Link></li>
            <li><Link href="/my-profile">My Profile</Link></li>
          </ul>
        </div>

        
        <Link href="/" className="btn btn-ghost hover:bg-transparent px-2 my-2 min-w-0">
          <Image
            src="/navicon2.png"
            alt="Terrenn Logo"
            width={130}
            height={30}
            className="w-24 md:w-32 h-auto object-contain drop-shadow-md"
            priority
          />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex lg:w-1/3 justify-center">
        <ul className="menu menu-horizontal px-1 font-medium tracking-wide">
          <li><NavLink href="/" className="hover:text-gray-300 transition-colors">Home</NavLink></li>
          <li><NavLink href="/all-tiles" className="hover:text-gray-300 transition-colors">All Tiles</NavLink></li>
          <li><NavLink href="/my-profile" className="hover:text-gray-300 transition-colors">My Profile</NavLink></li>
        </ul>
      </div>

      <div className="navbar-end lg:w-1/3 flex justify-end items-center gap-2 md:gap-4 mr-2">
        {isPending ? <div className="w-20 h-10 bg-gray-200 animate-pulse rounded-full"></div>
          : session ? (
            <>
              
              <Link href="/my-profile" className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-gray-200 hover:border-gray-900 transition-colors">
                <Image
                  src={session.user.image || "https://placehold.co/400"}
                  alt={session.user.name || "User"}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </Link>

              
              <button
                className="flex-shrink-0 whitespace-nowrap font-semibold py-1.5 px-3 md:py-2 md:px-6 text-[10px] md:text-sm rounded-full border border-white text-white hover:bg-white hover:text-black transition-all duration-300" onClick={async () => await authClient.signOut()}>
                Log Out
              </button>
            </>)
            : (
              <Link
                href="/login"
                className="flex-shrink-0 whitespace-nowrap font-semibold py-1.5 px-4 md:py-2 md:px-6 text-[10px] md:text-sm rounded-full border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Log In
              </Link>
            )
        }
      </div>
    </div>
  );
};

export default NavBar;