import React from 'react';

const Userlistbyfilter = () => {
  return (
    <div className="md:col-span-6 m-6">
      <div className="card bg-white shadow-md rounded-lg overflow-hidden">
        <div className="card-header border-b px-4 py-2 bg-gray-50">
          <div className="flex justify-between items-center">
            <div className="card-title font-semibold text-lg">User List</div>
            <div className="card-tools">
              <ul className="flex space-x-2" role="tablist">
                <li role="presentation">
                  <a href="#pills-today" className="tab-link text-sm px-3 py-1 rounded-full text-gray-600 hover:bg-gray-200 transition" role="tab" aria-selected="false" tabIndex="-1">
                    Active
                  </a>
                </li>
                <li role="presentation">
                  <a href="#pills-week" className="tab-link text-sm px-3 py-1 rounded-full bg-blue-500 text-white" role="tab" aria-selected="true">
                    Suspended
                  </a>
                </li>
                <li role="presentation">
                  <a href="#pills-month" className="tab-link text-sm px-3 py-1 rounded-full text-gray-600 hover:bg-gray-200 transition" role="tab" aria-selected="false" tabIndex="-1">
                    Flagged
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-body p-4 space-y-4">
          {[
            { name: "Joko Subianto", status: "pending", message: "I am facing some trouble with my viewport. When I start my...", time: "8:40 PM", avatarBg: "bg-blue-500" },
            { name: "Prabowo Widodo", status: "open", message: "I have some query regarding the license issue.", time: "1 Day Ago", avatarBg: "bg-gray-400" },
            { name: "Lee Chong Wei", status: "closed", message: "Is there any update plan for RTL version near future?", time: "2 Days Ago", avatarBg: "bg-red-500" },
            { name: "Peter Parker", status: "open", message: "I have some query regarding the license issue.", time: "2 Days Ago", avatarBg: "bg-gray-400" },
            { name: "Logan Paul", status: "closed", message: "Is there any update plan for RTL version near future?", time: "2 Days Ago", avatarBg: "bg-red-500" },
          ].map((ticket, index) => (
            <div key={index} className="d-flex items-center space-x-3">
              <div className={`avatar w-10 h-10 rounded-full flex items-center justify-center text-white ${ticket.avatarBg}`}>
                {ticket.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h6 className="text-base font-bold text-gray-900">
                  {ticket.name} <span className={`text-sm pl-3 ${ticket.status === "pending" ? "text-yellow-500" : ticket.status === "open" ? "text-green-500" : "text-gray-500"}`}>{ticket.status}</span>
                </h6>
                <span className="text-sm text-gray-500">{ticket.message}</span>
              </div>
              <div className="text-right text-xs text-gray-400">{ticket.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Userlistbyfilter;
