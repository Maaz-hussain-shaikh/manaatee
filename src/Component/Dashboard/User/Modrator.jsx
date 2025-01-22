import React, { useState } from 'react'
import PageHeader from '../Pageheader';
import 'react-toastify/dist/ReactToastify.css';
import Allmodratorlist from './Allmodratorlist';
import Modaratorpending from './Moderatorpending';


const Modrator = () => {
  const [list,setlist]=useState("All")
  return (
    <>
     <div className="mt-4 mx-4">
     <PageHeader name="Moderator List" path="Home" path2="Moderator List" />
     <div className="card-header border-b px-4 py-3 bg-gray-50">
          <div className="flex justify-end items-center">
           
            <div className="card-tools">
              <ul className="flex space-x-2" role="tablist">
              <li role="presentation">
                  <button className={`tab-link text-sm px-3 py-1 rounded-full ${list==="All"?"bg-blue-500 text-white":"text-gray-600 hover:bg-gray-200 transition text-gray-600"} `} onClick={()=>{setlist("All")}}>
                  All list
                  </button>
                
                </li>
                <li role="presentation">
                  <button  className={`tab-link text-sm px-3 py-1 rounded-full ${list==="active"?"bg-blue-500 text-white":"text-gray-600 hover:bg-gray-200 transition text-gray-600"} `} onClick={()=>{setlist("active")}}>
                  Active
                  </button>
                 
                </li>
                <li role="presentation">
                  <button className={`tab-link text-sm px-3 py-1 rounded-full ${list==="Inactive"?"bg-blue-500 text-white":"text-gray-600 hover:bg-gray-200 transition text-gray-600"} `} onClick={()=>{setlist("Inactive")}}>
                  Inactive
                  </button>
                
                </li>
                <li role="presentation">
                  <button className={`tab-link text-sm px-3 py-1 rounded-full ${list==="Deleted"?"bg-blue-500 text-white":"text-gray-600 hover:bg-gray-200 transition text-gray-600"} `} onClick={()=>{setlist("Deleted")}}>
                  Deleted
                  </button>
                </li>
                <li role="presentation">
                  <button className={`tab-link text-sm px-3 py-1 rounded-full ${list==="Pending"?"bg-blue-500 text-white":"text-gray-600 hover:bg-gray-200 transition text-gray-600"} `} onClick={()=>{setlist("Pending")}}>
                  Pending
                  </button> 
                </li>
                <li role="presentation">
                  <button className={`tab-link text-sm px-3 py-1 rounded-full ${list==="Reject"?"bg-blue-500 text-white":"text-gray-600 hover:bg-gray-200 transition text-gray-600"} `} onClick={()=>{setlist("Reject")}}>
                  Reject
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
    
     </div>
   {list==="All"?<>
    <Allmodratorlist />
   </>:<><Modaratorpending listname={list}/></>}

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


