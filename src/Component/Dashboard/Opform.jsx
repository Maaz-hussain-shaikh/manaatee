import React, { useState } from 'react'
import axios from 'axios';


const Opform = () => {
  const URL = 'https://aaliyaenterprises.com/manaatee/Api/admin/operator_registration';

 
  const [data, setData] = useState({
    full_name: "",
    email: "",
    username: "",
    password: "",
    number: ""
  });

  const handelchange = (event) => {
    let name = event.target.name
    let val = event.target.value
    setData({ ...data, [name]: val })
  }
  const [errorMessage, setErrorMessage] = useState("");



  const handleLogin = async (e) => {
    e.preventDefault();
    if (!data.full_name || !data.email || !data.username || !data.password || !data.number) {
      setErrorMessage("Please enter all information");
      return;
    }
    try {
      const response = await axios.post(URL, {
        "full_name": data.full_name,
        "email": data.email,
        "username": data.username,
        "password": data.password,
        "number": data.number
      }, {
        headers: {
          authorization: `Bearer OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4`,
        }
      }
      );
      setErrorMessage(response.data.mass);
      if (response.data.status === true) { 
      } else {
        setErrorMessage(response.data.mass)
       console.log(response.data,data)
        setData({})
      }

    } catch (error) {

      console.error("Login error:", error.response?.data || error);
      setErrorMessage(error.response?.data?.message);
    }

  };
  return (
    <>    <div className='flex justify-center py-10 items-center'>
      <form onSubmit={handleLogin}>
        <div className="bg-white ">
          <h1 className="text-gray-800 font-bold text-2xl">Create Operator</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">{errorMessage}</p>

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd" />
            </svg>
            <input className="pl-2 outline-none border-none" value={data.full_name || ''} type="name"
              name='full_name'
              onChange={handelchange} placeholder="Full Name" />
          </div>

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M14.243 10.743a4.01 4.01 0 01-1.415 1.414A3.978 3.978 0 0110 13a3.978 3.978 0 01-2.829-1.172A3.978 3.978 0 016 9a3.978 3.978 0 011.172-2.828A3.978 3.978 0 0110 5a3.978 3.978 0 012.828 1.172A3.978 3.978 0 0114 9v1.414a1.002 1.002 0 002 0V9a6 6 0 10-6 6 6 6 0 003.536-1.172 6.03 6.03 0 002.121-2.121A6.03 6.03 0 0017 9v1.414a3.002 3.002 0 01-3 3h-.757a3.996 3.996 0 01-2.828 1.172 3.996 3.996 0 01-2.828-1.172A3.996 3.996 0 015 10.586v-.757a1 1 0 012 0v.757a2.002 2.002 0 002 2h1.414a2 2 0 002-2V9a2 2 0 00-2-2 2 2 0 00-2 2v.586a1.002 1.002 0 002 0V9a4.01 4.01 0 011.414-1.415A4.01 4.01 0 0114 9v1.414z" clipRule="evenodd" />
            </svg>


            <input className="pl-2 outline-none border-none" value={data.username || ''} type="name"
              name='username'
              onChange={handelchange} placeholder="Username" />
          </div>

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.24 4H3.76A1.76 1.76 0 002 5.76v12.48A1.76 1.76 0 003.76 20h16.48A1.76 1.76 0 0022 18.24V5.76A1.76 1.76 0 0020.24 4zm-.12 2l-8.12 5.05L4.12 6h15.99zM4 18V7.45l7.88 4.9c.2.12.44.19.68.19.24 0 .48-.07.68-.19L20 7.45V18H4z" />
            </svg>
            <input className="pl-2 outline-none border-none" value={data.email || ''} type="Email"
              name='email'
              onChange={handelchange} placeholder="Email" />
          </div>

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.707 13.293l-2-2a1 1 0 00-1.414 0l-1 1a14.019 14.019 0 01-4.586-4.586l1-1a1 1 0 000-1.414l-2-2a1 1 0 00-1.414 0l-1.5 1.5c-.38.38-.593.883-.593 1.414 0 6.436 5.207 11.643 11.643 11.643.53 0 1.034-.213 1.414-.593l1.5-1.5a1 1 0 000-1.414z" />
            </svg>
            <input className="pl-2 outline-none border-none" value={data.number || ''} type="number"
              name='number'
              onChange={handelchange} placeholder="Phone number" />
          </div>

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd" />
            </svg>
            <input className="pl-2 outline-none border-none" value={data.password || ''} type="password"
              name='password'
              onChange={handelchange} placeholder="Password" />
          </div>
          <p className="text-sm font-normal text-red-600 text-center">  </p>
          <button className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"  type="submit">Login</button>
          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
        </div>
      </form>
    </div>

    </>
  )
}

export default Opform
