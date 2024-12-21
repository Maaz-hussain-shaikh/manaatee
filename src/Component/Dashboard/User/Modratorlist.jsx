import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


const Modratorlist = ({ data }) => {
    const [currentstatus, setstatus] = useState(data.status);
    const [user_id] = useState(data.user_id);
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option) => {
        setstatus(option);
        setIsOpen(false);

        const fetchdata = async () => {
            try {
              const response = await axios.post("https://manaatee.cyberelite.work/manaatee/Api/moderator/moderator_accept_reject",{
                "user_id":user_id,
                "user_status":option
            }, {
                headers: {
                  authorization: `Bearer OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4`,
                }
              });
      
              if (response.data.status === true) {
                console.log(response)
                
              } else {
                console.log(response)
              }
      
            } catch (error) {
      
              console.error("some thing broke error:", error.response?.data || error);
      
            }
      
      
          };
          fetchdata();
        console.log(option)
    };
    return (
        <>
            <div className="rounded-xl bg-white p-6 shadow-lg w-full mb-4">
                <div className="flex flex-wrap ">

                    {/* Doctor Profile Section */}
                    <div className="w-full md:w-2/3 lg:w-3/4 flex flex-wrap">

                        {/* Profile Image and Link */}
                        <div className="w-1/4 sm:w-1/5 md:w-1/4 lg:w-1/5 text-center">
                            <a href="/">
                                <picture>

                                    <img
                                        className="rounded-full mx-auto w-20 h-20"
                                        src={data.certifications_file_name}
                                        alt={data.certifications_file_name}
                                    />
                                </picture>
                            </a>
                            <div className="mt-2 text-blue-500">
                                <Link to="/Profile" className="underline">
                                    View Profile
                                </Link>
                            </div>
                        </div>

                        {/* Doctor Information */}
                        <div className="w-3/4 sm:w-4/5 md:w-3/4 lg:w-4/5 px-4">
                            <a href="/doctors/profile/dr-kishan-a-v-id-23873" className="text-black">
                                <h3 className="text-xl font-semibold">{data.full_name} </h3>
                            </a>
                            <div className="text-gray-600 mt-2">{data.years_of_experience} years of Experience</div>
                            <div className="text-gray-600">{data.profile_description}</div>
                            <div className="text-gray-600">{data.specialization}</div>

                            <hr className="my-4 border-dashed border-gray-300" />

                            <div className="flex items-center space-x-2">
                                <p className="text-yellow-500">

                                    <span>{data.preferred_language}</span>
                                </p>
                                <span className="w-1 h-1 bg-black rounded-full inline-block"></span>
                                <p className="text-blue-500">{data.country}</p>
                            </div>
                        </div>
                    </div>

                    {/* Consultation Section */}
                    <div className="w-full md:w-1/3 lg:w-1/4 mt-4 md:mt-0">
                        <div className="text-center md:text-right">
                            <h3 className="text-lg font-semibold">Consultation Fee</h3>
                            <div className="text-xl font-bold mt-2">₹ {data.consultation_fee}/-</div>
                        </div>

                        <div className="mt-4 text-center md:text-right">
                            <input
                                type="text"
                                value={currentstatus}
                                readOnly
                                style={{ display: "none" }}

                            />
                            <button className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg" onClick={() => setIsOpen(!isOpen)}>
                                {data.status}
                            </button>
                            {isOpen && (
                                <div className="absolute right-20 bg-white border rounded-sm shadow-lg overflow-hidden z-20">
                                    <div className="overflow-y-auto max-h-48">
                                        <div className="flex items-center px-4 py-2 hover:bg-gray-100" onClick={() => handleSelect("active")}>
                                            <p className="text-sm font-semibold">Active</p>
                                        </div>
                                        <div className="flex items-center px-4 py-2 hover:bg-gray-100" onClick={() => handleSelect("inactive")}>
                                            <p className="text-sm font-semibold">Inactive</p>
                                        </div>
                                        <div className="flex items-center px-4 py-2 hover:bg-gray-100" onClick={() => handleSelect("deleted")}>
                                            <p className="text-sm font-semibold">Deleted</p>
                                        </div>
                                        <div className="flex items-center px-4 py-2 hover:bg-gray-100" onClick={() => handleSelect("pending")}>
                                            <p className="text-sm font-semibold">Pending</p>
                                        </div>
                                        <div className="flex items-center px-4 py-2 hover:bg-gray-100" onClick={() => handleSelect("reject")}>
                                            <p className="text-sm font-semibold">Reject</p>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Modratorlist
