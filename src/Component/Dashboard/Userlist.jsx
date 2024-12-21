import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPageData } from '../../datastore/paginationAction';
import PageHeader from './Pageheader';
import { useNavigate } from 'react-router-dom';

const Userlist = () => {

  const locate=useNavigate()
  const URL = "https://manaatee.cyberelite.work/manaatee/Api/Users/all_user";
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.pagination);
  const [currentPage, setCurrentPage] = useState(1); // Start from page 1
   const [total,setTotal]=useState("--")
  
  useEffect(() => {
    dispatch(fetchPageData(URL, currentPage));
    if (data && data[1]?.total) {
      setTotal(data[1].total);
    } else {
      setTotal('--'); 
    }
  }, [dispatch, URL, currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

 
  return (
    <>
      <div className="mt-4 mx-4">
        <PageHeader name="User List" path="Home" path2="User List" />
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b darkkborder-gray-700 bg-gray-50 darkktext-gray-400 darkkbg-gray-800">
                  <th className="px-4 py-3">Name</th>
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
                        <tr className="bg-gray-50 darkkbg-gray-800 hover:bg-gray-100 darkkhover:bg-gray-900 text-gray-700 darkktext-gray-400" key={index} onClick={()=>{locate(`/userdetails/${elem.user_id}`)}}>
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                              <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                              <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                            <div>
                              <p className="font-semibold">{elem.full_name}</p>
                              <p className="text-xs text-gray-600 darkktext-gray-400">{elem.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">{elem.phone}</td>
                        <td className="px-4 py-3 text-xs">
                          <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full darkkbg-green-700 darkktext-green-100"> {elem.status}</span>
                        </td>
                        <td className="px-4 py-3 text-sm">{formattedDate}</td>
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
            <span className="flex items-center col-span-3"> Showing Page {currentPage-1}-{currentPage} of {total}</span>
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
                      disabled={currentPage === total} // Disable if no more data
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


export default Userlist

