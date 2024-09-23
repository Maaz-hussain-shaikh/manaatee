import React from 'react'
import Sidebar from './Dashboard/Sidebar'
import StatisticsCard from './Dashboard/StatisticsCard'
import Traffic from './Dashboard/Traffic'
import Activities from './Dashboard/Activities'
import Task from './Dashboard/Task'
import Clienttable from './Dashboard/Clienttable'
import FooterForm from './Dashboard/FooterForm'


const Dashboard = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">

        <div className="fixed w-full flex items-center justify-between h-14 text-white z-10">
          <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
            <img className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden" src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg" alt='domi' />
            <span className="hidden md:block">ADMIN</span>
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
                <a href="/" className="flex items-center ml-4 hover:text-blue-100">
                <span className="inline-flex justify-center items-center mr-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </span>
                  Add Operator
                </a>
              </li>
              <li>
                
                <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
              </li>
              
              <li>
                <a href="/" className="flex items-center mr-4 hover:text-blue-100">
                  <span className="inline-flex mr-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                  </span>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Sidebar />
        
        <div className="h-full  ml-14 mt-14 mb-10 md:ml-64">
        

      <div>

      <nav className="text-sm font-semibold" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center text-blue-500">
            <a href="/" className="text-gray-700">Home</a>
            <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
          </li>
          <li className="flex items-center">
            <a href="/" className="text-gray-600">Dashboard</a>
          </li>
        </ol>
        
      </nav>
     
      <div className="lg:flex justify-between items-center m-6 ">
        <p className="text-2xl font-semibold mb-2 lg:mb-0">Good afternoon, Joe!</p>
        <button className="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow">View Logs</button>
      </div>
      </div>
          <StatisticsCard />
          <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
            <Traffic />
            <Activities />
          </div>
          <Task />
          <Clienttable />
          <FooterForm />
        </div>
      </div>


      
    </>
  )
}

export default Dashboard


// https://aaliyaenterprises.com/manaatee/ backend url