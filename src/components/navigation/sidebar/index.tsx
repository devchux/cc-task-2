import SidebarItem from './sidebar-item'
import Avatar from '../../avatars/avatar'

const Sidebar = () => {
  return (
    <div className="bg-white w-[4.5rem] shadow-[0px_4px_23px_0px_rgba(0,0,0,0.05)] h-full px-3 py-6 flex flex-col gap-8 items-center">
      <div className="w-8 h-8 rounded-full bg-alto" />
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-6">
          <SidebarItem link="/home" src="/assets/icons/home.svg" />
          <SidebarItem link="/members" src="/assets/icons/persons.svg" />
          <SidebarItem link="/calendar" src="/assets/icons/calendar.svg" />
          <SidebarItem link="/share" src="/assets/icons/share.svg" />
          <SidebarItem link="/note" src="/assets/icons/note.svg" />
          <SidebarItem link="/book" src="/assets/icons/book.svg" />
          <SidebarItem link="/love" src="/assets/icons/love.svg" />
          <SidebarItem link="/less" src="/assets/icons/less.svg" />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <SidebarItem link="/settings" src="/assets/icons/settings.png" />
          <Avatar />
        </div>
      </div>
    </div>
  )
}

export default Sidebar