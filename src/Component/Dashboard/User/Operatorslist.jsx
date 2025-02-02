import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { fetchoprator } from '../../../datastore/api';

const Opratorlist = () => {
const [data,setdata]=useState();
const locate=useNavigate();
const[loading,setloading]=useState(true)
      const[error,seterror]=useState(null)
useEffect(()=>{
    const fetchdata= async ()=>{
        try {
            const response = await fetchoprator();
           
           if(response.data.status===true){
            console.log(response.data)
            setdata(response.data.data)
            setloading(false)
           }else{
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
                  <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b darkkborder-gray-700 bg-gray-50 darkktext-gray-400 darkkbg-gray-800">
                    <th className="px-4 py-3">User Name</th>
                    <th className="px-4 py-3">Number</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Created Date</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y darkkdivide-gray-700 darkkbg-gray-800">
                {loading ? (
                  <tr>
                    <td colSpan="4" className="text-center">Loading...</td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan="4" className="text-center text-red-500">Error: {error.message || "Please check your internet connection and try again"}</td>
                  </tr>
                ) :data?.length > 0 ? (
        <>
           {
                        data?.map((elem,index)=>{
                            const formattedDate = new Date(data[index].created_date).toLocaleDateString()
                            return(
                            <tr className="bg-gray-50 darkkbg-gray-800 hover:bg-gray-100 darkkhover:bg-gray-900 text-gray-700 darkktext-gray-400" key={index} onClick={()=>{locate(`/operatordetails/${data[index].user_id}`)}}>
                    <td className="px-4 py-3">
                      <div className="flex items-center text-sm">
                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                          <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                          <p className="font-semibold">{data[index].full_name}</p>
                          <p className="text-xs text-gray-600 darkktext-gray-400">{data[index].email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">{data[index].number}</td>
                    <td className="px-4 py-3 text-xs">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full darkkbg-green-700 darkktext-green-100"> {data[index].status}</span>
                    </td>
                    <td className="px-4 py-3 text-sm">{formattedDate}</td>
                  </tr>
                            
                           )
                        })
                    }
        </>
      ) : (
        <tr>
        <td colSpan="4" className="text-center">No Data available</td>
      </tr>
      )}               
                  
                </tbody>
              </table>
            </div>
           
          </div>
        </div>
    
    </>
  )
}

export default Opratorlist
