import React, { useEffect, useState } from 'react'
import Sidebar from './Dashboard/Sidebar'
import Nav from './Dashboard/Nav'
import Analytics from './Dashboard/Analytics'
import Form from './Form';
import Path from './Dashboard/Path';
import Opform from './Dashboard/Opform';

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  // Function to toggle the state
  const handleToggle = () => {
    setIsToggled((prev) => !prev);  // Toggle the state
  };

  const checkSessionStorage = () => {
    const userType = sessionStorage.getItem('userType');
    setIsLoggedIn(userType === 'admin');
  };

  useEffect(() => {

    checkSessionStorage();


    const interval = setInterval(() => {
      checkSessionStorage();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>{
      isLoggedIn ? <>
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
          <Nav onToggle={handleToggle} />
          <Sidebar />

          <div className="h-full  ml-14 mt-14 mb-10 md:ml-64">
            <Path />

{
  isToggled?<><Opform /></>:<><Analytics /></>
}
            

            



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