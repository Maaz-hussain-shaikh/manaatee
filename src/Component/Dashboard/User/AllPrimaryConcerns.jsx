import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PageHeader from '../Pageheader';


const AllPrimaryConcerns = () => {
    const URL="https://manaatee.cyberelite.work/manaatee/Api/masters/all_primary_concerns"
    const [data,setdata]=useState();
   
    
    
    useEffect(()=>{
        const fetchdata= async ()=>{
            try {
                const response = await axios.get(URL,{
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
        <> <div className="mt-4 mx-4">
            <PageHeader name="All Primary Concerns List" path="Home" path2="All Primary Concerns List"/>
          <div className="w-full overflow-hidden rounded-lg shadow-xs">
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b darkkborder-gray-700 bg-gray-50 darkktext-gray-400 darkkbg-gray-800">
                    <th className="px-4 py-3">User </th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Status</th>
                    
                  </tr>
                </thead>
                <tbody className="bg-white divide-y darkkdivide-gray-700 darkkbg-gray-800">
                {data?.length > 0 ? (
        <>
           {
                        data?.map((elem,index)=>{
                            
                            return(
                            <tr className="bg-gray-50 darkkbg-gray-800 hover:bg-gray-100 darkkhover:bg-gray-900 text-gray-700 darkktext-gray-400" key={index}>
                    <td className="px-4 py-3">
                      <div className="flex items-center text-sm">
                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img className="object-cover w-full h-full rounded-full" src={data[index].image} alt="" loading="lazy" />
                          <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                          
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">{data[index].text}</td>
                    <td className="px-4 py-3 text-xs">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full darkkbg-green-700 darkktext-green-100"> {data[index].status}</span>
                    </td>
                    
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
        </div>
        
        </>
  )
}

export default AllPrimaryConcerns
