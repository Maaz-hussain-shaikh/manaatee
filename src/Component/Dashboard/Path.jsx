import React from 'react'
import { Link } from 'react-router-dom'

const Path = () => {
  
  return (
    <>
       <div className="flex flex-col md:flex-row items-start md:items-center m-4 pt-2 ">
      <div>
        <h3 className="font-bold text-2xl mb-3">Dashboard</h3>
        <h6 className="text-gray-500 mb-2">Free Bootstrap 5 Admin Dashboard</h6>
      </div>
      <div className="mt-2 md:mt-0 md:ml-auto">
        <a href="/" className="btn bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full px-4 py-2 mr-2">Manage</a>
        <Link to="/Opform" className="btn bg-blue-500 hover:bg-blue-800 text-white rounded-full px-4 py-2">Add Operator</Link>
      </div>
    </div>

    </>
  )
}

export default Path
