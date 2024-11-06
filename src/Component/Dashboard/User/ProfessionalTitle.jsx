import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PageHeader from '../Pageheader';


const ProfessionalTitle = () => {
    const URL="https://aaliyaenterprises.com/manaatee/Api/masters/professional_title?id=0"
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
        <>
          <div className="mt-4 mx-4">
          <PageHeader name="Professional Title" path="Home" path2="Professional Title"/>
              <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                        <th className="px-4 py-3">Category Name</th>
                        <th className="px-4 py-3">Audio Fee</th>
                        <th className="px-4 py-3">Video Fee</th>
                       
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                    {data?.length > 0 ? (
            <>
               {
                            data?.map((elem,index)=>{
                               
                                return(
                                <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400" key={index}>
                        <td className="px-4 py-3">
                          <div className="flex items-center text-sm">
                           
                            <div>
                              <p className="font-semibold">{data[index].consult_category_name}</p>
                              
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">{data[index].consult_category_audio_fee}</td>
                        <td className="px-4 py-3 text-sm">{data[index].consult_category_video_fee}</td>
                        
                        
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

export default ProfessionalTitle
