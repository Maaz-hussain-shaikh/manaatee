import React from 'react';
import { Link } from 'react-router-dom';
const EditProfile = () => {
  return (
    <div className="flex flex-wrap  m-6">
      <div className="w-full px-2 mb-4">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-semibold mb-4">Edit User Isnformation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label htmlFor="email2" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
              <input
                type="email"
                id="email2"
                placeholder="Enter Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <small className="text-gray-500">We'll never share your email with anyone else.</small>
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex items-center mb-4">
              <label htmlFor="inlineinput" className="block text-gray-700 text-sm font-bold mr-2">Inline Input</label>
              <input
                type="text"
                id="inlineinput"
                placeholder="Enter Input"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div>
              <label htmlFor="successInput" className="block text-gray-700 text-sm font-bold mb-2">Success Input</label>
              <input
                type="text"
                id="successInput"
                value="Success"
                className="shadow appearance-none border border-green-500 rounded w-full py-2 px-3 text-green-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div>
              <label htmlFor="errorInput" className="block text-gray-700 text-sm font-bold mb-2">Error Input</label>
              <input
                type="text"
                id="errorInput"
                value="Error"
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-red-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <small className="text-red-500">Please provide valid information.</small>
            </div>

            <div>
              <label htmlFor="disableinput" className="block text-gray-700 text-sm font-bold mb-2">Disable Input</label>
              <input
                type="text"
                id="disableinput"
                placeholder="Enter Input"
                disabled
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="flexRadioDefault1"
                  name="gender"
                  className="mr-2"
                />
                <label htmlFor="flexRadioDefault1" className="mr-4">Male</label>
                
                <input
                  type="radio"
                  id="flexRadioDefault2"
                  name="gender"
                  defaultChecked
                  className="mr-2"
                />
                <label htmlFor="flexRadioDefault2">Female</label>
              </div>
            </div>

            {/* Add more elements in a similar way... */}
          </div>
        </div>
        <div className="mt-2 md:mt-0 md:ml-auto">
        <a href="/" className="btn bg-blue-100 hover:bg-blue-600 text-blue-600 rounded-full px-4 py-2 mr-2">Edit Profile</a>
        <Link to="/Opform" className="btn bg-red-500 hover:bg-red-800 text-white rounded-full px-4 py-2">Delete User</Link>
      </div>
      </div>
      
    </div>
    
  );
};

export default EditProfile;
