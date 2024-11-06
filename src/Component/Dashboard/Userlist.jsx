import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PageHeader from './Pageheader';

import UserDetails from './User/UserDetails';

const Userlist = () => {
  const URL = "https://aaliyaenterprises.com/manaatee/Api/Users/all_user?page=1&limit=10"
  const [data, setdata] = useState();
  const [selectedUserId, setSelectedUserId] = useState(null);


  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(URL, {
          headers: {
            authorization: `Bearer OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4`,
          }
        });

        if (response.data.status === true) {
          console.log(response.data)
          setdata(response.data.data)
        } else {
          setdata(response.data.mass)
        }

      } catch (error) {

        console.error("some thing broke error:", error.response?.data || error);

      }


    };
    fetchdata();

  }, [])

const details=(id)=>{
  setSelectedUserId(id)
}
  return (
    <>
      <div className="mt-4 mx-4">
        <PageHeader name="All User List" path="Home" path2="All User List" />
    
           {selectedUserId === null ? <>
           <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                  <th className="px-4 py-3">User Name</th>
                  <th className="px-4 py-3">Number</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Created Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {data?.length > 0 ? (
                  <>
                    {
                      data?.map((elem, index) => {
                        const formattedDate = new Date(data[index].created_date).toLocaleDateString()
                        return (
                          <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400" key={index} onClick={()=>{details(data[index].user_id)}}>
                            <td className="px-4 py-3">
                              <div className="flex items-center text-sm">
                                <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                  <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                                  <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                </div>
                                <div>
                                  <p className="font-semibold">{data[index].full_name}</p>
                                  <p className="text-xs text-gray-600 dark:text-gray-400">{data[index].email}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm">{data[index].phone}</td>
                            <td className="px-4 py-3 text-xs">
                              <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> {data[index].status}</span>
                            </td>
                            <td className="px-4 py-3 text-sm">{formattedDate}</td>
                          </tr>

                        )
                      })
                    }
                  </>
                ) : (
                  <tr>
                    <td><p>Loading...</p></td>
                  </tr>
                )}

              </tbody>
            </table>
          </div>
        </div>
           </>:<><UserDetails user={selectedUserId} /></>
        }
      </div>
    </>
  )
}

export default Userlist
