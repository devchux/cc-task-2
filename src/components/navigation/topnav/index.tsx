import Dropdown from "../../features/dropdown";
import MoveButton from "../../features/move-button";
import Tab from "./tab";

const TopNav = () => {
  return (
    <div className="flex justify-between items-center">
      <Dropdown />
      <div className="flex gap-2 items-center">
        <Tab src="/assets/icons/pin.svg" />
        <Tab src="/assets/icons/cancel-user.svg" />
        <Tab src="/assets/icons/mark-user.svg" />
        <Tab src="/assets/icons/echo-user.svg" />
        <Tab src="/assets/icons/message.svg" />
        <div className="w-[1px] h-6 bg-[#eee]" />
        <MoveButton />
      </div>
    </div>
  );
};

export default TopNav;
