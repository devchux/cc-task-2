import { Outlet } from "react-router-dom";
import Sidebar from "../navigation/sidebar";

const Layout = () => {
  return (
    <div className="flex h-[100vh] bg-zircon">
      <Sidebar />
      <div className="w-full h-full p-8 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
