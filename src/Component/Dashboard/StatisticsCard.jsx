import React from 'react'
import Path from './Path';


const StatisticsCard = () => {
  return (
    <>
    <Path/>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 m-4 gap-4">
      {/* Visitors Card */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center">
          <div className="text-blue-500 bg-blue-100 rounded-full p-3">
            <i className="fas fa-users text-2xl"></i>
          </div>
          <div className="ml-4">
            <p className="text-gray-600">Visitors</p>
            <h4 className="text-xl font-semibold">1,294</h4>
          </div>
        </div>
      </div>

      {/* Subscribers Card */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center">
          <div className="text-blue-500 bg-blue-100 rounded-full p-3">
            <i className="fas fa-user-check text-2xl"></i>
          </div>
          <div className="ml-4">
            <p className="text-gray-600">Subscribers</p>
            <h4 className="text-xl font-semibold">1,303</h4>
          </div>
        </div>
      </div>

      {/* Sales Card */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center">
          <div className="text-green-500 bg-green-100 rounded-full p-3">
            <i className="fas fa-luggage-cart text-2xl"></i>
          </div>
          <div className="ml-4">
            <p className="text-gray-600">Sales</p>
            <h4 className="text-xl font-semibold">$1,345</h4>
          </div>
        </div>
      </div>

      {/* Order Card */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center">
          <div className="text-gray-500 bg-gray-100 rounded-full p-3">
            <i className="far fa-check-circle text-2xl"></i>
          </div>
          <div className="ml-4">
            <p className="text-gray-600">Order</p>
            <h4 className="text-xl font-semibold">576</h4>
          </div>
        </div>
      </div>
    </div>
        
    </>
  )
}

export default StatisticsCard
