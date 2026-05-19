'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const NavLink = ({href, children}) => {
  const pathname = usePathname();

  const isActive = href === pathname;

  return <Link href={href} className={`${isActive && "font-bold transition-all"} hover:text-gray-300 transition-colors`}>{children}</Link>;
};

export default NavLink;