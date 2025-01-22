import React, { useState,useEffect } from 'react'
import axios from 'axios';




const Post = () => {
   
    const URL = "https://manaatee.cyberelite.work/manaatee/Api/post/fetch_post"
  const [data, setdata] = useState();

  const [loading, setloading] = useState(true)
  const [error, seterror] = useState(null)
  useEffect(() => {
    
    const fetchdata = async () => {
      try {
        const response = await axios.get(URL,{
          headers: {
            authorization: `Bearer OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4`,
          }
        });

        if (response.data.status === true) {
          console.log(response.data)
          setdata(response.data.data)
          setloading(false)
        } else {
          seterror(response.data.mass)
          setloading(false)
          setdata(response.data.mass)
        }

      } catch (error) {
        seterror("some thing broke")
        setloading(false)
        console.error("some thing broke error:", error.response?.data || error);

      }


    };
    fetchdata();

  }, [])


  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-4 text-black dark:text-white">
  <div className="md:col-span-2 xl:col-span-3">
    <h3 className="text-lg font-semibold">User Posts</h3>
  </div>

  <div className="rounded bg-gray-200 dark:bg-gray-800 p-3">
    {/* Scrollable List Container */}
    <div className="h-64 overflow-y-auto scrollbar-hide">
        {loading ? (
                <div>
                  <h3 colSpan="4" className="text-center">Loading...</h3>
                </div>
              ) : error ? (
                <div>
                  <h3 colSpan="4" className="text-center text-red-500">Error: {error.message || "Please check your internet connection and try again"}</h3>
                </div>
              ):data?.length > 0 ?(<>
              {data?.map((user) => (
        <div
          key={user.id}
          className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900"
        >
          {/* User Info */}
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-semibold">{user.post_by}</h3>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              ID: {user.id}
            </span>
          </div>

          {/* Post Text */}
          <p className="text-sm text-gray-700 dark:text-gray-200 mt-2">
            {user.text}
          </p>

          {/* Status */}
          <div className="text-xs text-gray-600 dark:text-gray-400 mt-2">
            <span
              className={`px-2 py-1 rounded ${
                user.post_status === "active"
                  ? "bg-green-200 text-green-800 dark:bg-green-700 dark:text-green-200"
                  : "bg-yellow-200 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-200"
              }`}
            >
              {user.post_status}
            </span>
          </div>
        </div>
      ))}
              </>):(
                  <div>
                    <h3 colSpan="4" className="text-center">No Data available</h3>
                  </div>
                )
        }
      
    </div>
  </div>
  <div className="md:col-span-2 xl:col-span-1">
            <div className="rounded bg-gray-200 dark:bg-gray-800 p-3">
              <div className="flex justify-between py-1 text-black dark:text-white">
                <h3 className="text-sm font-semibold">Tasks in TO DO</h3>
                <svg className="h-4 fill-current text-gray-600 dark:text-gray-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" /></svg>
              </div>
              <div className="text-sm text-black dark:text-gray-50 mt-2">
                <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">Delete all references from the wiki</div>
                <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">Remove analytics code</div>
                <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                  Do a mobile first layout
                  <div className="text-gray-500 dark:text-gray-200 mt-2 ml-2 flex justify-between items-start">
                    <span className="text-xs flex items-center">
                      <svg className="h-4 fill-current mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z" /></svg>
                      3/5
                    </span>
                    <img src="https://i.imgur.com/OZaT7jl.png" className="rounded-full"  alt='demo'/>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">Check the meta tags</div>
                <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                  Think more tasks for this example
                  <div className="text-gray-500 dark:text-gray-200 mt-2 ml-2 flex justify-between items-start">
                    <span className="text-xs flex items-center">
                      <svg className="h-4 fill-current mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z" /></svg>
                      0/3
                    </span>
                  </div>
                </div>
             
              </div>
            </div>
          </div>
          <div className="md:col-span-2 xl:col-span-1">
            <div className="rounded bg-gray-200 dark:bg-gray-800 p-3">
              <div className="flex justify-between py-1 text-black dark:text-white">
                <h3 className="text-sm font-semibold">Tasks in TO DO</h3>
                <svg className="h-4 fill-current text-gray-600 dark:text-gray-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" /></svg>
              </div>
              <div className="text-sm text-black dark:text-gray-50 mt-2">
                <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">Delete all references from the wiki</div>
                <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">Remove analytics code</div>
                <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                  Do a mobile first layout
                  <div className="text-gray-500 dark:text-gray-200 mt-2 ml-2 flex justify-between items-start">
                    <span className="text-xs flex items-center">
                      <svg className="h-4 fill-current mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z" /></svg>
                      3/5
                    </span>
                    <img src="https://i.imgur.com/OZaT7jl.png" className="rounded-full"  alt='demo'/>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">Check the meta tags</div>
                <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                  Think more tasks for this example
                  <div className="text-gray-500 dark:text-gray-200 mt-2 ml-2 flex justify-between items-start">
                    <span className="text-xs flex items-center">
                      <svg className="h-4 fill-current mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z" /></svg>
                      0/3
                    </span>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
</div>


    </>
  )
}

export default Post
