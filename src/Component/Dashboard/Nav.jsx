import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Nav = ({ onToggle }) => {
  const locate = useNavigate()
  const name = sessionStorage.getItem('username')
  const [active, setActive] = useState(null);

  const toggleMenu = (menu) => {
    setActive(active === menu ? null : menu);
  };
  const onlogout = () => {
    locate("/");
    sessionStorage.clear();
  }
  return (
    <>
    
    <nav className="navbar border-b bg-white fixed top-0 left-0 right-0 z-1">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Search Bar */}
        <div className="hidden lg:flex items-center m-auto">
          <div className="relative">
            <button className="absolute left-0 top-0 ml-2 text-gray-500">
              <i className="fa fa-search"></i>
            </button>
            <input
              type="text"
              placeholder="Search ..."
              className="pl-10 pr-4 py-2 border rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Icons */}
        <ul className="flex items-center space-x-4 ml-auto">
          {/* Mobile Search Icon */}
          <li className="lg:hidden">
            <button className="text-gray-500">
              <i className="fa fa-search"></i>
            </button>
          </li>

          {/* Messages Dropdown */}
          <li className="relative">
            <button
              onClick={() => toggleMenu('Messages')}
              className="text-gray-500"
            >
              <i className="fa fa-envelope"></i>
            </button>
            {active === 'Messages' && (
              <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg overflow-hidden z-20">
                <div className="py-2 px-4 font-semibold">Messages</div>
                <div className="overflow-y-auto max-h-48">
                  <a href="/" className="flex items-center px-4 py-2 hover:bg-gray-100">
                    <img src="assets/img/jm_denis.jpg" alt="Profile" className="w-8 h-8 rounded-full mr-3" />
                    <div>
                      <p className="text-sm font-semibold">Jimmy Denis</p>
                      <p className="text-xs text-gray-500">How are you?</p>
                    </div>
                  </a>
                </div>
                <div className="text-center py-2">
                  <a href="/" className="text-blue-600 text-sm">See all messages</a>
                </div>
              </div>
            )}
          </li>

          {/* Notifications Dropdown */}
          <li className="relative">
            <button
               onClick={() => toggleMenu('Notifications')}
              className="text-gray-500 relative"
            >
              <i className="fa fa-bell"></i>
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">4</span>
            </button>
            {active === "Notifications" && (
              <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg overflow-hidden z-20">
                <div className="py-2 px-4 font-semibold">You have 4 new notifications</div>
                <div className="overflow-y-auto max-h-48">
                  <a href="/" className="flex items-center px-4 py-2 hover:bg-gray-100">
                    <i className="fa fa-user-plus text-blue-500 mr-3"></i>
                    <div>
                      <p className="text-sm">New user registered</p>
                      <p className="text-xs text-gray-500">5 minutes ago</p>
                    </div>
                  </a>
                </div>
                <div className="text-center py-2">
                  <a href="/" className="text-blue-600 text-sm">See all notifications</a>
                </div>
              </div>
            )}
          </li>

          {/* Quick Actions Dropdown */}
          <li className="relative">
            <button
              onClick={() => toggleMenu('QuickActions')}
              className="text-gray-500"
            >
              <i className="fas fa-layer-group"></i>
            </button>
            {active === "QuickActions" && (
              <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg overflow-hidden z-20">
                <div className="py-2 px-4 font-semibold">Quick Actions</div>
                <div className="flex flex-wrap p-2">
                  <a href="/" className="w-1/3 p-2 text-center">
                    <div className="text-red-500">
                    <i class="fa-regular fa-bell"></i>
                    </div>
                    <p className="text-xs">Create</p>
                  </a>
                  <a href="/" className="w-1/3 p-2 text-center">
                    <div className="text-red-500">
                      <i className="far fa-calendar-alt"></i>
                    </div>
                    <p className="text-xs">Calendar</p>
                  </a>
                </div>
                
              </div>
            )}
          </li>

          {/* Profile Dropdown */}
          <li className="relative">
            <button
              onClick={() => toggleMenu('Profile')}
              className="flex items-center text-gray-500"
            >
              <img src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="Profile" className="w-8 h-8 rounded-full mr-2" />
              <span className="hidden md:block">Hi, <span className="font-bold">{name}</span></span>
            </button>
            {active === "Profile" && (
              <div className="absolute right-0 mt-2 w-64 bg-white border rounded-lg shadow-lg overflow-hidden z-20">
                <div className="py-4 px-4 text-center">
                  <img src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="Profile" className="w-12 h-12 rounded-full mx-auto" />
                  <p className="font-semibold">{name}</p>
                  <p className="text-xs text-gray-500">hello@example.com</p>
                  <a href="profile.html" className="mt-2 inline-block bg-blue-500 text-white text-xs py-1 px-3 rounded-full">View Profile</a>
                </div>
                <div className="border-t">
                  <Link to="/" className="block px-4 py-2 text-sm hover:bg-gray-100">My Profile</Link>
                  <Link to="/" className="block px-4 py-2 text-sm hover:bg-gray-100" onClick={onlogout}>Logout</Link>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Nav
