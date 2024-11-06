import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PageHeader from '../Pageheader';
import Modratorlist from './Modratorlist';

const Modrator = () => {
  const URL = "https://aaliyaenterprises.com/manaatee/Api/moderator/all_moderator?page=1&limit=10"
  const [data, setdata] = useState([]);
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


  return (
    <>

      <div className="mt-4 mx-4">
        <PageHeader name="Moderator List" path="Home" path2="Moderator List" />
        
            
                {data?.length > 0 ? (
                  <>
                    {
                      data?.map((elem, index) => {
                        
                        return (
                          <Modratorlist key={index} data={elem}/>

                        )
                      })
                    }
                  </>
                ) : (
                  <div>
                    <div><p>Loading...</p></div>
                  </div>
                )}

             
         
      </div>

    </>
  )
}

export default Modrator
