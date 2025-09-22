import React from "react";
import SideBar from "./Components/SideBar";
import {
  BarChart3,
  Home,
  MessageCircle,
  Calendar,
  User,
  Settings,
  LayoutDashboard,
  LifeBuoy
} from "lucide-react";
import SideBarItem from "./Components/SideBarItem";


function App() {
  return (
    <main className="App">
      <SideBar>
        <SideBarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          alert
        />
        <SideBarItem icon={<Home size={20} />} text="Home" active />
        <SideBarItem icon={<MessageCircle size={20} />} text="Messages" />
        <SideBarItem icon={<Calendar size={20} />} text="Calendar" />
        <SideBarItem icon={<User size={20} />} text="Profile" alert />
        <SideBarItem icon={<Settings size={20} />} text="Settings" />
        <br className="my-3"/>
        <SideBarItem icon={<BarChart3 size={20} />} text="Analytics" />
        <SideBarItem icon={<LifeBuoy size={20} />} text="Support" />
      </SideBar>
    </main>
  );
}

export default App;
