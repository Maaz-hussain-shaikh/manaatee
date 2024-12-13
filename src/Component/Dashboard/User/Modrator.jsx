import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPageData } from '../../../datastore/paginationAction';
import PageHeader from '../Pageheader';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modrator = () => {

  const locate = useNavigate()
  const URL = "https://aaliyaenterprises.com/manaatee/Api/moderator/all_moderator";
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.pagination);
  const [currentPage, setCurrentPage] = useState(1); // Start from page 1
  const [active, setActive] = useState(null)
  const [apiSuccess, setApiSuccess] = useState(false);

  const toggleid = (id) => {
    setActive(active === id ? null : id);
  };

  useEffect(() => {
    dispatch(fetchPageData(URL, currentPage));
  }, [dispatch, URL, currentPage,apiSuccess]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleSelect = (option, userid) => {
    const fetchdata = async () => {
      const loadingToastId = toast.loading("Updating Moderator Status...",{
        position: "top-center",
      });
      try {
        
        const response = await axios.post("https://aaliyaenterprises.com/manaatee/Api/moderator/moderator_accept_reject", {
          "user_id": userid,
          "user_status": option
        }, {
          headers: {
            authorization: `Bearer OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4`,
          }
        });

        if (response.data.status === true) {
          console.log(response)
          setApiSuccess(!apiSuccess)
          toast.update(loadingToastId, {
            render: response.data.message,
        type: "success",
        isLoading: false,
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
           
            });
        } else {
          console.log(response)
        }

      } catch (error) {
        toast.update(loadingToastId, {
          render: "Please check your internet connection and try again",
          type: "error",
          isLoading: false,
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
  
        });
        console.error("some thing broke error:", error.response?.data || error);

      }


    };
    fetchdata();

  };
  return (
    <>
      <div className="mt-4 mx-4">
        <PageHeader name="Moderator List" path="Home" path2="Moderator List" />
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b darkkborder-gray-700 bg-gray-50 darkktext-gray-400 darkkbg-gray-800">
                  <th className="px-4 py-3">User Name</th>
                  <th className="px-4 py-3">Number</th>
                  <th className="px-4 py-3">Created Date</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y darkkdivide-gray-700 darkkbg-gray-800">
                {loading ? (
                  <tr>
                    <td colSpan="4" className="text-center">Loading...</td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan="4" className="text-center text-red-500">Error: {error.message || "Something went wrong"}</td>
                  </tr>
                ) : data[currentPage]?.data?.length > 0 ? (
                  data[currentPage]?.data.map((elem, index) => {
                    const formattedDate = new Date(elem.created_date).toLocaleDateString();
                    return (
                      <tr key={index} className="bg-gray-50 darkkbg-gray-800 hover:bg-gray-100 darkkhover:bg-gray-900 text-gray-700 darkktext-gray-400" >
                        <td className="px-4 py-3" onClick={() => { locate(`/moderatordetails/${elem.user_id}`) }}>
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                alt=""
                                loading="lazy"
                              />
                              <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                            <div>
                              <p className="font-semibold">{elem.full_name}</p>
                              <p className="text-xs text-gray-600 darkktext-gray-400">{elem.years_of_experience} years experience</p>
                              <p className="text-xs text-gray-600 darkktext-gray-400">{elem.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm" onClick={() => { locate(`/moderatordetails/${elem.user_id}`) }}>{elem.phone}</td>
                        <td className="px-4 py-3 text-sm" onClick={() => { locate(`/moderatordetails/${elem.user_id}`) }}>{formattedDate}</td>
                        <td className="px-4 py-3 text-xs" onClick={() => { toggleid(elem.user_id) }}>
                          <span className={` cursor-pointer px-2 py-1 font-semibold leading-tight ${elem.status === "active" ? "text-white bg-green-800" : "text-white bg-red-700"} rounded-lg`}>
                            {elem.status}
                          </span>
                          {active === elem.user_id && (
                            <div className="absolute right-20 bg-white border rounded-sm shadow-lg overflow-hidden z-20">
                              <div className="overflow-y-auto max-h-48">
                                <div className="flex items-center px-4 py-2 hover:bg-gray-100" onClick={() => handleSelect("active", elem.user_id)}>
                                  <p className="text-sm font-semibold cursor-pointer">Active</p>
                                </div>
                                <div className="flex items-center px-4 py-2 hover:bg-gray-100" onClick={() => handleSelect("inactive", elem.user_id)}>
                                  <p className="text-sm font-semibold cursor-pointer">Inactive</p>
                                </div>
                                <div className="flex items-center px-4 py-2 hover:bg-gray-100" onClick={() => handleSelect("deleted", elem.user_id)}>
                                  <p className="text-sm font-semibold cursor-pointer">Deleted</p>
                                </div>
                                <div className="flex items-center px-4 py-2 hover:bg-gray-100" onClick={() => handleSelect("pending", elem.user_id)}>
                                  <p className="text-sm font-semibold cursor-pointer">Pending</p>
                                </div>
                                <div className="flex items-center px-4 py-2 hover:bg-gray-100" onClick={() => handleSelect("reject", elem.user_id)}>
                                  <p className="text-sm font-semibold cursor-pointer">Reject</p>
                                </div>
                              </div>

                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center text-gray-500">No data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t darkkborder-gray-700 bg-gray-50 sm:grid-cols-9 darkktext-gray-400 darkkbg-gray-800">
            <span className="flex items-center col-span-3"> Showing Page {currentPage}</span>
            <span className="col-span-2"></span>
            <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
              <nav aria-label="Table navigation">
                <ul className="inline-flex items-center">
                  <li>
                    <button
                      className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                      aria-label="Previous"
                      onClick={handlePreviousPage}
                      disabled={currentPage === 1}
                    >
                      <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">{currentPage}</button>
                  </li>
                  <li>
                    <button
                      className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                      aria-label="Next"
                      onClick={handleNextPage}
                      disabled={data && data.length === 0} // Disable if no more data
                    >
                      <svg className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                        <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
            </span>
          </div>
        </div>
      </div>
     
    </>
  );
};


export default Modrator


// const URL = "https://aaliyaenterprises.com/manaatee/Api/moderator/all_moderator?page=1&limit=10"
// const [data, setdata] = useState([]);
// useEffect(() => {
//   const fetchdata = async () => {
//     try {
//       const response = await axios.get(URL, {
//         headers: {
//           authorization: `Bearer OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4`,
//         }
//       });

//       if (response.data.status === true) {
//         console.log(response.data)
//         setdata(response.data.data)
//       } else {
//         setdata(response.data.mass)
//       }

//     } catch (error) {

//       console.error("some thing broke error:", error.response?.data || error);

//     }


//   };
//   fetchdata();

// }, [])