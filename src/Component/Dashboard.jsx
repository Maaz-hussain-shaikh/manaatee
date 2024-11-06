import React, { useEffect, useState } from 'react'
import Sidebar from './Dashboard/Sidebar'
import { Outlet } from 'react-router-dom'; 
import Nav from './Dashboard/Nav'
import Form from './Form';



const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); // New loading state

  // Function to check session storage
  const checkSessionStorage = () => {
    const userType = sessionStorage.getItem('userType');
    if (userType === 'admin') {
      setIsLoggedIn(true);  // Set logged in if userType is 'admin'
    } else {
      setIsLoggedIn(false);  // Set logged out if no valid session
    }
    setLoading(false); // End loading after the session check
  };

  useEffect(() => {
    checkSessionStorage();

    // If you want to keep checking session storage:
    const interval = setInterval(() => {
      checkSessionStorage();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // While loading, you can display a loading spinner or blank screen
  if (loading) {
    return <div>Loading...</div>;  // You can customize this
  }

 

  return (
    <>{
      isLoggedIn ? <>
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
          <Nav />
          <Sidebar />

          <div className="h-full  ml-14 mt-14 mb-10 md:ml-64">
            

           {/* main panal is here  */}
               <Outlet/>

            

          </div>
        </div>
      </> : <>
        <Form />


      </>
    }

    </>
  )
}

export default Dashboard


// https://aaliyaenterprises.com/manaatee/ backend url