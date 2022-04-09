import { useState } from "react";
import { Hidden } from "@material-ui/core";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleMobileNav = () => {
    setOpenSidebar((prev) => !prev);
  };

  return (
    <>
      <Navbar toggleMobileNav={toggleMobileNav} />
      {/* <Hidden only={['lg', 'xl']}> */}
      {openSidebar && (
        <Sidebar
          open={openSidebar}
          onClose={toggleMobileNav}
          variant="temporary"
        />
      )}
      {/* </Hidden> */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
