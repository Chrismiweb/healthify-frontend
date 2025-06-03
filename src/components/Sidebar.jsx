
// Sidebar.jsx
import {
  LayoutDashboard,
  Search,
  User,
  CalendarDays,
  Hospital,
  HeartPulse,
  Wallet,
  Settings,
  HelpCircle,
  FileText,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={18} />, path: '/dashboard' },
    { name: 'Explore', icon: <Search size={18} />, path: '/explore' },
    { name: 'Profile', icon: <User size={18} />, path: '/profile' },
    { name: 'Ward', icon: <User size={18} />, path: '/ward' },
    { name: 'Sessions', icon: <FileText size={18} />, path: '/session' },
    { name: 'Nearest hospitals', icon: <Hospital size={18} />, path: '/nearest-hospitals' },
    { name: 'Wellness& Lifestyle', icon: <HeartPulse size={18} />, path: '/wellness' },
    { name: 'Finance', icon: <Wallet size={18} />, path: '/invoice' },
    { name: 'Manage subscription', icon: <CalendarDays size={18} />, path: '/subscription' },
    { name: 'Help/platform feedback', icon: <HelpCircle size={18} />, path: '/help' },
    { name: 'Settings', icon: <Settings size={18} />, path: '/settings' },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r p-4 flex flex-col space-y-4">
      {menuItems.map((item, index) => {
        const isActive = location.pathname === item.path;

        return (
          <Link to={item.path} key={index}>
            <div
              tabIndex={0}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md cursor-pointer transition ${
                isActive
                  ? 'bg-[#4369B2] text-white'
                  : 'text-gray-700 hover:bg-blue-100'
              }`}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
