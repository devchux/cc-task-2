import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "../../../utils/lib";

const SidebarItem: React.FC<{ src: string; link: string }> = ({
  src,
  link,
}) => {
  const location = useLocation();

  return (
    <NavLink
      to={link}
      className={cn("flex justify-center items-center w-12 h-12 rounded-lg", {
        "bg-zumthor": location.pathname.startsWith(link),
      })}
    >
      <img src={src} alt="" className="w-6 h-6" />
    </NavLink>
  );
};

export default SidebarItem;
