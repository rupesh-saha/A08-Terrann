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