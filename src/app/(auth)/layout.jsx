import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import FooterBar from '@/Components/FooterBar';
import NavBar from '@/Components/NavBar';
import React from 'react';

const AuthLayout = ({children}) => {
  return (
    <>
      <NavBar/>
      {children}
      <FooterBar/>
    </>
  );
};

export default AuthLayout;