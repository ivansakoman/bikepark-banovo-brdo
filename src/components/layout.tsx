import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="layout">
        <div className="layout__body">
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
