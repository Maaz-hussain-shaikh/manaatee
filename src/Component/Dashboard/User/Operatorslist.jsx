import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Opratorlist = () => {
      const URL="https://aaliyaenterprises.com/manaatee/Api/admin/all_operators"
const [data,setdata]=useState();
const locate=useNavigate();

useEffect(()=>{
    const fetchdata= async ()=>{
        try {
            const response = await axios.post(URL,{
                "userid": 0,               
              },{
                headers: {
                  authorization: `Bearer OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4`,
              }
              });
           
           if(response.data.status===true){
            console.log(response.data)
            setdata(response.data.data)
           }else{
            setdata(response.data.mass)
           }
            
          } catch (error) {
            
            console.error("some thing broke error:", error.response?.data || error);
            
          }
        
          
        };
    fetchdata();

},[])


  return (
    <>
      <div className="mt-4 mx-4">
      <div className="page-header p-3">
  <div className="flex justify-between items-center">
    <div>
      <h3 className="font-bold text-2xl mb-4">Operator List</h3>
      <ul className="breadcrumbs flex items-center space-x-2 text-gray-600">
        <li className="nav-home">
          <a href="/" className="text-blue-500">
            <i className="fa-solid fa-house text-gray-400 hover:text-blue-500"></i>
          </a>
        </li>
        <li className="separator">
          <i className="fa-solid fa-chevron-right ml-2"></i>
        </li>
        <li className="nav-item">
          <a href="/" className="text-gray-600 hover:text-blue-500 ml-2">Home</a>
        </li>
        <li className="separator">
          <i className="fa-solid fa-chevron-right"></i>
        </li>
        <li className="nav-item">
          <a href="/" className="text-gray-600 hover:text-blue-500 ml-2">Operator List</a>
        </li>
      </ul>
    </div>
    <div>
      <Link to="/Opform" className="btn bg-blue-500 hover:bg-blue-800 text-white rounded-full px-4 py-2">
        Add Operator
      </Link>
    </div>
  </div>
</div>


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
                        data?.map((elem,index)=>{
                            const formattedDate = new Date(data[index].created_date).toLocaleDateString()
                            return(
                            <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400" key={index} onClick={()=>{locate(`/operatordetails/${data[index].user_id}`)}}>
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
                    <td className="px-4 py-3 text-sm">{data[index].number}</td>
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
            <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
              <span className="flex items-center col-span-3"> Showing 21-30 of 100 </span>
              <span className="col-span-2"></span>
              {/* <!-- Pagination --> */}
              <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                <nav aria-label="Table navigation">
                  <ul className="inline-flex items-center">
                    <li>
                      <button className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple" aria-label="Previous">
                        <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
                        </svg>
                      </button>
                    </li>
                    <li>
                      <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">1</button>
                    </li>
                    <li>
                      <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">2</button>
                    </li>
                    <li>
                      <button className="px-3 py-1 text-white dark:text-gray-800 transition-colors duration-150 bg-blue-600 dark:bg-gray-100 border border-r-0 border-blue-600 dark:border-gray-100 rounded-md focus:outline-none focus:shadow-outline-purple">3</button>
                    </li>
                    <li>
                      <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">4</button>
                    </li>
                    <li>
                      <span className="px-3 py-1">...</span>
                    </li>
                    <li>
                      <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">8</button>
                    </li>
                    <li>
                      <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">9</button>
                    </li>
                    <li>
                      <button className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple" aria-label="Next">
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
  )
}

export default Opratorlist
