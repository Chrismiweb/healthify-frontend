import React from "react";

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

// Icon mapping function
const getIcon = (name, className = "w-6 h-6") => {
  const iconMap = {
    dash: dashboard,
    search: search,
    profile: profile,
    ward: ward,
    session: session,
    hospital: hospital,
    fitness: fitness,
    card: card,
    sub: subManagement,
    help: help,
    settings: settings,
    menu: menu,
    close: close,
  };

  const IconComponent = iconMap[name] || settings;
  return <img src={IconComponent} alt={name} className={className} />;
};

const tabs = [
  { id: 1, name: "Dashboard", iconName: "dash" },
  { id: 2, name: "Search", iconName: "search" },
  { id: 3, name: "Profile", iconName: "profile" },
  { id: 4, name: "Ward", iconName: "ward" },
  { id: 5, name: "Sessions", iconName: "session" },
  { id: 6, name: "Nearest hospital", iconName: "hospital" },
  { id: 7, name: "Wellness & Lifestyle", iconName: "fitness" },
  { id: 8, name: "Finance", iconName: "card" },
  { id: 9, name: "Manage subscription", iconName: "sub" },
  { id: 10, name: "Help/platform feedback", iconName: "help" },
  { id: 11, name: "Settings", iconName: "settings" },
];

const Sidebar = ({ activeTab, setActiveTab, isOpen, toggleSideBar }) => {
  return (
    <div className="bg-white lxl:w-[350px] flex h-screen overflow-auto shadow-lg">
      {/* Desktop and Mobile Sidebar (open) */}
      {isOpen ? (
        <div className="z-20 absolute bg-white h-full w-80 shadow-xl">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold text-gray-800">HealthCare</h2>
            <button onClick={toggleSideBar} className="p-2 hover:bg-gray-100 rounded-lg">
              {getIcon("close", "w-6 h-6")}
            </button>
          </div>
          <ul className="m-6">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={`flex items-center gap-3 p-3 m-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-50 ${
                  activeTab === tab.id
                    ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                    : "text-gray-700"
                }`}
                onClick={() => {
                  setActiveTab(tab.id);
                  toggleSideBar();
                }}
              >
                {getIcon(tab.iconName, `w-5 h-5`)}
                <span className="font-medium">{tab.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        // Always visible sidebar (desktop style): no icons
        <div className="w-full">
          <div className="p-6 border-b">
            <img src="/logo.png" alt="logo" className="w-auto h-auto" />
          </div>
          <ul className="m-6">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={`p-3 m-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-50 ${
                  activeTab === tab.id
                    ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                    : "text-gray-700"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="font-medium text-black">{tab.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
