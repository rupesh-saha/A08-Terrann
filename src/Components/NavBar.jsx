import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  return (
    
    <div className="navbar rounded-2xl max-w-[97%] mx-auto bg-black/40 backdrop-blur-md border border-white/10 fixed top-3 left-0 right-0 z-50 text-white shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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

        <Link href="/" className="btn btn-ghost hover:bg-transparent px-2 my-2">
          
          <Image
            src="/navicon2.png"
            alt="Terrenn Logo"
            width={130}
            height={30}
            className="w-32 md:w-38 h-auto object-contain drop-shadow-md"
            priority
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium tracking-wide">
          
          <li><Link href="/" className="hover:text-gray-300 transition-colors">Home</Link></li>
          <li><Link href="/all-tiles" className="hover:text-gray-300 transition-colors">All Tiles</Link></li>
          <li><Link href="/my-profile" className="hover:text-gray-300 transition-colors">My Profile</Link></li>
        </ul>
      </div>
      <div className="navbar-end mr-2">
        
        <Link 
          href="/login" 
          className="font-semibold py-2 px-6 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;