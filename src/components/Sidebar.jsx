import React, { useState, useEffect } from "react";
import {
  card,
  dashboard,
  fitness,
  help,
  hospital,
  profile,
  search,
  session,
  settings,
  subManagement,
  ward,
  menu,
  close,
} from "../assets/icons";

// import { tab } from "@testing-library/user-event/dist/tab";

const tabs = [
  { id: 1, name: "Dashboard", iconName: dashboard },
  { id: 2, name: "search", iconName: search },
  { id: 3, name: "profile", iconName: profile },
  { id: 4, name: "Ward", iconName: ward },
  { id: 5, name: "Sessions", iconName: session },
  { id: 6, name: "Nearest hospital", iconName: hospital },
  { id: 7, name: "Wellness & Lifestyle", iconName: fitness },
  { id: 8, name: "finance", iconName: card },
  { id: 9, name: "Manage subscription", iconName: subManagement },
  { id: 10, name: "Help/platform feedback", iconName: help },
  { id: 11, name: "settings", iconName: settings,  },
];

const Sidebar = () => {
  const [isopen, setIsopen] = useState(false);
  const toggleSideBar = () => setIsopen(!isopen);

  const useInnerWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return width;
  };

  const width = useInnerWidth();

  return (
    <div className="bg-white lxl:w-[350px] flex h-screen overflow-auto">
      {width > 1230 ? (
        // Desktop Sidebar
        <div>
          <ul className="m-6">
            {tabs.map((tab) => (
              <li key={tab.id} className="flex items-center gap-2 p-2 m-2 cursor-pointer">
                <img src={tab.iconName} alt="" className="w-[25px]" />
                {tab.name}
              </li>
            ))}
          </ul>
        </div>
      ) : isopen ? (
        // Mobile Sidebar (Open)
        <div className={`" z-10 absolute bg-white h-full mb-10"`}>
          <div className="flex justify-end mt-5 mr-4">
            <button onClick={toggleSideBar}>
              <img src={close} alt="close" />
            </button>
          </div>
          <ul className="m-6">
            {tabs.map((tab) => (
              <li key={tab.id} className="flex items-center gap-2 p-2 m-2">
                <img src={tab.iconName} alt="" className="w-[25px]" />
                {tab.name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        // Mobile Sidebar (Closed / Hamburger)
        <div className="flex items-start mt-5">
          <button onClick={toggleSideBar}>
            <img src={menu} alt="menu" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
