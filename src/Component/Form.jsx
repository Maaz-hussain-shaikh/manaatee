import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Form = () => {
  const URL = 'https://aaliyaenterprises.com/manaatee/Api/loginAuth/login_verification';

  const locate=useNavigate();
  const [user, setuser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!user || !password) {
      setErrorMessage("Please enter both username and password.");
      return;
    }
    try {
      const response = await axios.post(URL, {
        "username": user,
        "password": password
      },{
        headers: {
          authorization: `Bearer OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4`,
      }
      }
     );
     setErrorMessage(response.data.mass);
     if(response.data.status===true){
      locate("/")
      console.log(response.data.Userdata[0].user_type)
      sessionStorage.setItem('username', response.data.Userdata[0].username);
      sessionStorage.setItem('userType', response.data.Userdata[0].user_type);
     }else{
      setPassword("");
      setuser("")
     }
      
    } catch (error) {
      setErrorMessage("Please check your internet connection and try again");
      console.error("Login error:", error.response?.data || error);
      
    }
  
    
  };
  return (
    <>
       <div className="h-screen md:flex  ">
        <div
          className="relative overflow-hidden md:flex w-1/2 bg-brand-darktheme from-blue-800 to-purple-700 i justify-around items-center hidden">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">Manatee</h1>
            <p className="text-white mt-1">The most popular peer to peer lending at SEA</p>
            <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center">

        <form onSubmit={handleLogin}>
          <div className="bg-white">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
            
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd" />
              </svg>
              <input className="pl-2 outline-none border-none" type="name"
            value={user}
            onChange={(e) => setuser(e.target.value)} placeholder="Username"/>
            </div>
            
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd" />
              </svg>
              <input className="pl-2 outline-none border-none"  type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            </div>
            <p className="text-sm font-normal text-red-600 text-center">  {errorMessage}</p>
            <button className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2" type="submit">Login</button>
            <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
          </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form
// log in color :- #5f75ff
// over all theme :- #12528a