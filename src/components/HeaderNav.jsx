import React from "react";
import {
  settings,
  help,
} from "../assets/icons";

// Navigation tabs configuration - import this from a shared file if needed
const tabs = [
  { id: 1, name: "Dashboard", iconName: "dash", path: "/dashboard" },
  { id: 2, name: "Search", iconName: "search", path: "/search" },
  { id: 3, name: "Profile", iconName: "profile", path: "/profile" },
  { id: 4, name: "Ward", iconName: "ward", path: "/ward" },
  { id: 5, name: "Sessions", iconName: "session", path: "/sessions" },
  { id: 6, name: "Nearest hospital", iconName: "hospital", path: "/hospital" },
  { id: 7, name: "Wellness & Lifestyle", iconName: "fitness", path: "/wellness" },
  { id: 8, name: "Finance", iconName: "card", path: "/finance" },
  { id: 9, name: "Manage subscription", iconName: "sub", path: "/subscription" },
  { id: 10, name: "Help/platform feedback", iconName: "help", path: "/help" },
  { id: 11, name: "Settings", iconName: "settings", path: "/settings" },
];

// Icon mapping function for header icons
const getHeaderIcon = (name, className = "w-5 h-5") => {
  const iconMap = {
    bell: settings, // Replace with your notification icon
    msg: help, // Replace with your message icon
    settings: settings,
  };

  const IconComponent = iconMap[name] || settings;
  return <img src={IconComponent} alt={name} className={className} />;
};

const Header = ({ 
  activeTab = 1, 
  user = { 
    name: "Dr. John Doe", 
    role: "Healthcare Professional",
    avatar: null 
  },
  onNotificationClick,
  onMessageClick,
  onProfileClick,
  notificationCount = 0,
  messageCount = 0,
  showBreadcrumb = true,
  className = ""
}) => {
  const currentTab = tabs.find(tab => tab.id === activeTab);
  
  return (
    <header className={`bg-white shadow-sm border-b border-gray-200 px-6 py-4 ${className}`}>
      <div className="flex items-center justify-between">
        {/* Breadcrumb */}
        {showBreadcrumb && (
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-gray-500">Home</span>
            <span className="text-gray-400">/</span>
            <span className="text-blue-600 font-medium">
              {currentTab?.name || 'Dashboard'}
            </span>
          </div>
        )}
        
        {/* Custom content can be passed here if no breadcrumb */}
        {!showBreadcrumb && (
          <div className="flex-1">
            {/* Space for custom content */}
          </div>
        )}
        
        {/* User Info and Actions */}
        <div className="flex items-center space-x-4">
          {/* Notifications
          <button 
            className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={onNotificationClick}
            aria-label="Notifications"
          >
            {getHeaderIcon("bell", "w-5 h-5")}
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                {notificationCount > 9 ? (
                  <span className="text-xs text-white font-bold">9+</span>
                ) : (
                  <span className="w-full h-full bg-red-500 rounded-full"></span>
                )}
              </span>
            )}
          </button> */}
          
          {/* Messages
          <button 
            className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={onMessageClick}
            aria-label="Messages"
          >
            {getHeaderIcon("msg", "w-5 h-5")}
            {messageCount > 0 && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                {messageCount > 9 ? (
                  <span className="text-xs text-white font-bold">9+</span>
                ) : (
                  <span className="w-full h-full bg-blue-500 rounded-full"></span>
                )}
              </span>
            )}
          </button> */}
          
          {/* User Profile */}
          <button
            className="flex items-center space-x-3 pl-4 border-l border-gray-200 hover:bg-gray-50 rounded-lg transition-colors p-2"
            onClick={onProfileClick}
            aria-label="User Profile"
          >
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-xs text-gray-500">{user.role}</p>
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
              {user.avatar ? (
                <img 
                  src={user.avatar} 
                  alt="User Avatar" 
                  className="w-8 h-8 rounded-full object-cover" 
                />
              ) : (
                user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
              )}
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;