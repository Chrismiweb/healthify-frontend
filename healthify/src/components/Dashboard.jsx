import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./HeaderNav";

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Tab mapping based on your sidebar configuration
  const pathToTabMap = {
    '/': 1,
    '/dashboard': 1,
    '/explore': 2,
    '/profile': 3,
    '/ward': 4,
    '/sessions': 5,
    '/hospital': 6,
    '/wellness': 7,
    '/finance': 8,
    '/subscription': 9,
    '/help': 10,
    '/settings': 11,
  };

  // Update active tab based on current route
  useEffect(() => {
    const currentTab = pathToTabMap[location.pathname] || 1;
    setActiveTab(currentTab);
  }, [location.pathname]);

  // Handle tab changes and navigate to corresponding route
  const handleTabChange = (tabId) => {
    const tabToPathMap = {
      1: '/dashboard',
      2: '/explore',
      3: '/profile',
      4: '/ward',
      5: '/sessions',
      6: '/hospital',
      7: '/wellness',
      8: '/finance',
      9: '/subscription',
      10: '/help',
      11: '/settings',
    };

    setActiveTab(tabId);
    navigate(tabToPathMap[tabId] || '/dashboard');
  };

  const toggleSideBar = () => setIsOpen(!isOpen);

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
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={handleTabChange}
        isOpen={isOpen}
        toggleSideBar={toggleSideBar}
        width={width}
      />
      <main className="flex-1 flex flex-col">
        <Header 
          activeTab={activeTab}
          user={{
            name: "Dr. John Doe",
            role: "Healthcare Professional",
            avatar: null
          }}
          onNotificationClick={() => console.log('Notifications clicked')}
          onMessageClick={() => console.log('Messages clicked')}
          onProfileClick={() => console.log('Profile clicked')}
          notificationCount={3}
          messageCount={2}
        />
        <div className="flex-1 overflow-auto">
          {/* This is where the routed content will be rendered */}
          <Outlet />
        </div>
      </main>
      
      {/* Mobile overlay */}
      {isOpen && width <= 1230 && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleSideBar}
        />
      )}
    </div>
  );
};

export default DashboardLayout;