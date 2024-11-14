import React from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
const OperatorDetails = () => {
  const {operatorid} = useParams()
    const URL = `https://aaliyaenterprises.com/manaatee/Api/admin/all_operators`
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.post(URL, {
          "user_id":operatorid
  },{
          headers: {
            authorization: `Bearer OXU0c0JkY3AyNU1acmFqRTM3U1kxeGx2azpCNFJ6VWRIcnB4RXVxVFdPUUdKWFBudEw4`,
          }
        }); 

        
        if (response.data.status === true) {
           
            setdata(response.data.data)
          } else {
            setdata(response.data.data)
          }
  
      

      } catch (error) {

        console.error("some thing broke error:", error.response?.data || error);

      }


    };
    fetchdata();

  },[URL])

  return (
   
    <>
     {data?.length > 0 ? (<>
      <div className="bg-stone-50 flex flex-col items-center pb-12 ">
        {/* Doctor Profile Header */}
        <div className="hidden sm:block bg-white w-full flex-col items-center pt-5 pb-6 px-16 max-md:max-w-full max-md:px-5">
          <div className="flex w-full max-w-[78rem] justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap">
            <div className="flex items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap">

              <img loading="lazy" src="https://docsapp-doctor.s3.us-west-2.amazonaws.com/profile_images/34003.Manisha" alt="Doctor Profile" className="aspect-[0.99] object-contain object-center w-[8.75rem] overflow-hidden shrink-0 max-w-full rounded-[60%] border-2 border-gray-200 bg-white" />
              <div className="flex flex-col">
                <button className="text-indigo-950 text-sm font-bold bg-blue-100 px-3 py-1 rounded-lg">Psychology</button>
                <h1 className="text-indigo-950 text-2xl font-bold mt-3.5">{data[0].full_name}<Link to="/Profile/EditProfile">
                  <i className="fa-regular fa-pen-to-square text-lg ml-3"></i>
                </Link>
                </h1>
                <h2 className="text-indigo-950 text-base font-bold mt-3">
                 {data[0].email}  {data[0].number}
                </h2>
                <p>
                  Usertype :- {data[0].user_type} <br />
                  Otp verify :- {data[0].otp_verify}<br />
                  status :- {data[0].status}<br />
                  login id :- {data[0].login_id}<br />
                 
            
                </p>
                <div className="flex items-center mt-5">
                  <img loading="lazy" src="https://views.medibuddy.in/doctor-profile/languages.webp" alt="Languages" className="w-6" />
                  <h3 className="text-indigo-950 text-sm font-bold ml-2">Hindi,English</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mb-36 p-3 md:p-0">
          <div className="grid gap-5 md:grid-cols-3">

            {/* Left Column: Main Content */}
            <div className="md:col-span-2 space-y-6">

              {/* Doctor Information Card */}


              {/* About Doctor */}
              <div className="shadow-xl bg-white p-8 rounded-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://views.medibuddy.in/doctor-profile/about-doctor.webp"
                    alt="Doctor About"
                    className="w-5 sm:w-7"
                  />
                  <h2 className="text-indigo-950 text-lg font-bold">About the Doctor</h2>
                </div>
                <p>
                  Ms. Manisha Singh is an expert psychologist with 13 years of experience in areas like Cognitive Error, Behavioral Techniques, Active Listening, Non-Judgmental Approach, and more. She practices at Emoneeds in Delhi/NCR and speaks English, Hindi, and Punjabi.
                </p>
                <span className="text-blue-500 font-bold cursor-pointer">Read Less</span>
              </div>

              {/* Education */}
              <div className="shadow-xl bg-white p-8 rounded-3xl space-y-6">
                <div className="flex items-center gap-4">
                  <img
                    src="https://views.medibuddy.in/doctor-profile/education.webp"
                    alt="Doctor Education Logo"
                    className="w-6"
                  />
                  <h2 className="text-indigo-950 text-lg font-bold">Education</h2>
                </div>
                <div className="space-y-5">
                  {/* Education Item */}
                  <div className="flex items-start gap-4">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/neural-clarity-128610.appspot.com/o/android%2Fconsult%2FdefaultEducationLogo.png?alt=media&token=a0e01cbf-22bf-49ac-879b-f58011c472c6"
                      alt="Doctor Education Logo"
                      className="w-10"
                    />
                    <div>
                      <h3 className="text-indigo-950 font-bold">Government Medical College, Patiala</h3>
                      <p className="text-indigo-950">MBBS</p>
                    </div>
                  </div>

                  {/* Additional Education Items as needed */}
                </div>
              </div>

              {/* Specializations */}
              <div className="shadow-xl bg-white p-8 rounded-3xl">
                <div className="flex items-center gap-4">
                  <img
                    src="https://views.medibuddy.in/doctor-profile/specializations.webp"
                    alt="Doctor Specializations Logo"
                    className="w-6"
                  />
                  <h2 className="text-indigo-950 text-lg font-bold">Specializations</h2>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <span className="border bg-white px-4 py-3 rounded-xl">Cognitive Error, Behavioral Techniques</span>
                  <span className="border bg-white px-4 py-3 rounded-xl">Active Listening, Non-Judgmental Approach</span>
                  {/* Add more tags as needed */}
                </div>
              </div>

              {/* FAQs */}
              <div className="shadow-xl bg-white p-8 rounded-3xl">
                <div className="flex items-center gap-4">
                  <img
                    src="https://views.medibuddy.in/doctor-profile/faq.webp"
                    alt="Doctor FAQ Logo"
                    className="w-6"
                  />
                  <h2 className="text-indigo-950 text-lg font-bold">Frequently Asked Questions</h2>
                </div>
                {/* Add FAQ items with dropdown as needed */}
              </div>
            </div>

            {/* Right Column: Booking Section */}
            <div className="space-y-6">
            <div className="grid gap-6 m-6  ">
                
              </div>
              <div className="shadow-xl bg-white p-8 rounded-3xl text-center">
                <h1 className="text-indigo-950 text-xl font-bold">Instantly Consult With Doctor</h1>
                <button className="bg-blue-600 text-white w-full font-bold py-3.5 mt-6 rounded-xl">
                  Book Now
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>) : (
        <tr>
          <td><p>Loading...</p></td>
        </tr>
      )}
      </>
  )
}

export default OperatorDetails
