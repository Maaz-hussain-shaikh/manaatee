import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Nav = ({ onToggle }) => {
  const locate = useNavigate()
  const name = sessionStorage.getItem('username')

  const onlogout = () => {
    locate("/");
    sessionStorage.clear();
  }
  return (
    <>
      <div className="fixed w-full flex items-center justify-between h-14 text-white z-10">
        <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
          <img className="w-7 h-7 md:w-10 md:h-10 mr-2 object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt='domi' />
          <span className="hidden md:block">{name}</span>
        </div>
        <div className="flex justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right">
          <div className="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
            <button className="outline-none focus:outline-none">
              <svg className="w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
            <input type="search" name="" id="" placeholder="Search" className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent" />
          </div>
          <ul className="flex items-center">
            <li>
              {/* <button
                  aria-hidden="true"

                  className="group p-2 transition-colors duration-200 rounded-full shadow-md bg-blue-200 hover:bg-blue-200 dark:bg-gray-50 dark:hover:bg-gray-200 text-gray-900 focus:outline-none"
                >
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd" />
              </svg>
                
                </button> if we need notification here we can use this 
                */}
            </li>
            <li>
              <Link to="/Opform" className="flex items-center ml-4 hover:text-blue-100" >
                <span className="inline-flex justify-center items-center mr-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </span>
                Add Operator
              </Link>
            </li>
            <li>

              <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
            </li>

            <li>
              <Link to="/" className="flex items-center mr-4 hover:text-blue-100" onClick={onlogout}>
                <span className="inline-flex mr-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                </span>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Nav
