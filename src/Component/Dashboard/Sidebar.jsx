import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Icon component to reuse SVG icons
const Icon = ({ className }) => <i className={className}></i>;

// SidebarItem component for each sidebar item
const SidebarItem = ({ to, icon, label, notification }) => (
  <Link to={to} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
    <span className="inline-flex justify-center items-center ml-4">
      <Icon className={icon} />
    </span>
    <span className="ml-2 text-sm tracking-wide truncate">{label}</span>
    {notification && (
      <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">{notification}</span>
    )}
  </Link>
);

// Dropdown component to handle expandable items
const Dropdown = ({ label, isOpen, onToggle, items,icon }) => (
  <li className="relative">
    
    <button className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6 w-full" onClick={onToggle}>
      <span className="inline-flex justify-center items-center ml-4">
        <Icon className={icon} />
      </span>
      <span className="ml-2 text-sm tracking-wide truncate">{label}</span>
      <svg className="ml-auto w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
    {isOpen && (
      <ul className="left-0 w-full mt-2 bg-gray-700 text-white rounded-md shadow-lg overflow-hidden z-20">
        {items.map((item) => (
          <SidebarItem key={item.label} to={item.to} icon={item.icon} label={item.label} />
        ))}
      </ul>
    )}
  </li>
);

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleToggle = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className="fixed flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-gray-800 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none sidebar">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center h-8">
              <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Main</div>
            </div>
          </li>

          <SidebarItem to="/" icon="fa-solid fa-house" label="Dashboard" />
          <SidebarItem to="/posts" icon="fa-regular fa-images" label="Post" />
          <SidebarItem to="/specializationlist" icon="fa-solid fa-envelope" label="Specialization" />
          <SidebarItem to="/all_primary_concerns" icon="fa-solid fa-envelope" label="All Primary Concerns" />
          {/* <SidebarItem to="/coins" icon="fa-solid fa-coins" label="Coins" notification="1.2k" /> */}
          <SidebarItem to="/ProfessionalTitle" icon="fa-brands fa-hubspot" label="Professional Title" />
          <SidebarItem to="/Operatorlist" icon="fa-brands fa-hubspot" label="Operator" />

          <Dropdown
            label="User Managment"
            icon={"fa-solid fa-user"}
            isOpen={activeMenu === 'user'}
            onToggle={() => handleToggle('user')}
            items={[
              { to: '/users', label: 'All Users',icon:"fa-brands fa-hubspot" },
              { to: '/User/ConsultCategory', label: 'Post',icon:"fa-brands fa-hubspot" },
              { to: '/User/Moderator', label: 'Coins & Redemption',icon:"fa-brands fa-hubspot" },
              { to: '/User/Moderator', label: 'Vertual hug',icon:"fa-brands fa-hubspot" },
            ]}
          />
          
<Dropdown
            label="Moderator Management"
            icon={"fa-solid fa-user"}
            isOpen={activeMenu === 'Moderator Management'}
            onToggle={() => handleToggle('Moderator Management')}
            items={[
              { to: '/Moderatorlist', label: 'All Moderator Profiles',icon:"fa-brands fa-hubspot" },
              { to: '/User/ConsultCategory', label: 'Rating & Feedback',icon:"fa-brands fa-hubspot" },
              { to: '/User/Moderator', label: 'Session Logs',icon:"fa-brands fa-hubspot" },
              
            ]}
          />
          <Dropdown
            label="Content Moderation"
            icon={"fa-solid fa-user"}
            isOpen={activeMenu === 'Content Moderation'}
            onToggle={() => handleToggle('Content Moderation')}
            items={[
              { to: '/User/OperatorList', label: 'Post Moderation',icon:"fa-brands fa-hubspot" },
              { to: '/User/ConsultCategory', label: 'Comments',icon:"fa-brands fa-hubspot" },
              { to: '/User/Moderator', label: 'Chat Monitoring',icon:"fa-brands fa-hubspot" },
              
            ]}
          />
          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center mt-5 h-8">
              <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Settings</div>
            </div>
          </li>

          <SidebarItem to="/profile" icon="fa-solid fa-user-circle" label="Profile" />
          <SidebarItem to="/settings" icon="fa-solid fa-cog" label="Settings" />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
