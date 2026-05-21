import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import FooterBar from "@/Components/FooterBar";
import NavBar from "@/Components/NavBar";

const MainLayout = ({children}) => {
  return (
    <>
      <NavBar/>
      {children}
      <FooterBar/>
    </>
  );
};

export default MainLayout;