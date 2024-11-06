import { useState } from "react";


function CoinHistory() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const transactions = [
    {
      id: "/10231",
      date: "Mar 19, 2020, 2:45pm",
      amount: "Rs 250.00",
      status: "Completed",
    },
    {
      id: "/10231",
      date: "Mar 19, 2020, 2:45pm",
      amount: "Rs 250.00",
      status: "Completed",
    },
    {
      id: "/10231",
      date: "Mar 19, 2020, 2:45pm",
      amount: "Rs 250.00",
      status: "Completed",
    },
    {
      id: "/10231",
      date: "Mar 19, 2020, 2:45pm",
      amount: "Rs 250.00",
      status: "Completed",
    },
    {
      id: "/10231",
      date: "Mar 19, 2020, 2:45pm",
      amount: "Rs 250.00",
      status: "Completed",
    },
    // Add more transactions as needed
  ];

  return (
    <>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 m-6">
      {/* Today's Income */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h6 className="font-bold">Today's Income</h6>
            <p className="text-gray-500">All Customs Value</p>
          </div>
          <h4 className="text-blue-500 font-bold">$170</h4>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
        </div>
        <div className="flex justify-between text-gray-500 text-sm">
          <p>Change</p>
          <p>75%</p>
        </div>
      </div>

      {/* Total Revenue */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h6 className="font-bold">Total Revenue</h6>
            <p className="text-gray-500">All Customs Value</p>
          </div>
          <h4 className="text-green-500 font-bold">$120</h4>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
        </div>
        <div className="flex justify-between text-gray-500 text-sm">
          <p>Change</p>
          <p>25%</p>
        </div>
      </div>

      {/* New Orders */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h6 className="font-bold">New Orders</h6>
            <p className="text-gray-500">Fresh Order Amount</p>
          </div>
          <h4 className="text-red-500 font-bold">15</h4>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div className="bg-red-500 h-2 rounded-full" style={{ width: '50%' }}></div>
        </div>
        <div className="flex justify-between text-gray-500 text-sm">
          <p>Change</p>
          <p>50%</p>
        </div>
      </div>

      {/* New Users */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h6 className="font-bold">New Users</h6>
            <p className="text-gray-500">Joined New User</p>
          </div>
          <h4 className="text-gray-500 font-bold">12</h4>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div className="bg-gray-500 h-2 rounded-full" style={{ width: '25%' }}></div>
        </div>
        <div className="flex justify-between text-gray-500 text-sm">
          <p>Change</p>
          <p>25%</p>
        </div>
      </div>
    </div>
    <div className="col-span-8 m-6">
      
      <div className="rounded-lg shadow-lg bg-white p-4">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h3 className="text-lg font-semibold">Transaction History</h3>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-gray-500 hover:text-gray-700"
            >
              <i className="fa-solid fa-filter"></i>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Last Week</a>
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Last Month</a>
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Last Year</a>
              </div>
            )}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="py-2 px-4">Payment Number</th>
                <th className="py-2 px-4 text-right">Date & Time</th>
                <th className="py-2 px-4 text-right">Amount</th>
                <th className="py-2 px-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4 flex items-center">
                    <button className="mr-2 text-green-500">
                      
                    </button>
                    Payment from {transaction.id}
                  </td>
                  <td className="py-2 px-4 text-right">{transaction.date}</td>
                  <td className="py-2 px-4 text-right">{transaction.amount}</td>
                  <td className="py-2 px-4 text-right">
                    <span className="px-2 py-1 bg-green-200 text-green-800 text-xs font-semibold rounded-full">
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default CoinHistory;
