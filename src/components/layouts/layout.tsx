import { Outlet } from "react-router-dom";
import SidebarItem from "../navigation/sidebar/sidebar-item";
import Avatar from "../avatars/avatar";

const Layout = () => {
  return (
    <div className="flex h-[100vh] bg-zircon">
      <div className="bg-white w-[4.5rem] shadow-[0px_4px_23px_0px_rgba(0,0,0,0.05)] h-full px-3 py-6 flex flex-col gap-8 items-center">
        <div className="w-8 h-8 rounded-full bg-alto" />
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-6">
            <SidebarItem link="/home" src="/assets/svgs/home.svg" />
            <SidebarItem link="/members" src="/assets/svgs/persons.svg" />
            <SidebarItem link="/calendar" src="/assets/svgs/calendar.svg" />
            <SidebarItem link="/share" src="/assets/svgs/share.svg" />
            <SidebarItem link="/note" src="/assets/svgs/note.svg" />
            <SidebarItem link="/book" src="/assets/svgs/book.svg" />
            <SidebarItem link="/love" src="/assets/svgs/love.svg" />
            <SidebarItem link="/less" src="/assets/svgs/less.svg" />
          </div>
          <div className="flex flex-col gap-6 items-center">
            <SidebarItem link="/settings" src="/assets/svgs/settings.png" />
            <Avatar />
          </div>
        </div>
      </div>
      <div className="w-full h-full p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
