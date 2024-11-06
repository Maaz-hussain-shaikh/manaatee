import React from 'react'
import { Link } from 'react-router-dom';


const Mobile=()=>{
  return(<>
   <div className="relative px-4 top-4 block sm:hidden " >
        <div className="flex justify-between items-center">
          <img
            loading="lazy"
            src="https://docsapp-doctor.s3.us-west-2.amazonaws.com/profile_images/34003.Manisha"
            alt="Doctor Profile"
            className="aspect-[0.99] object-contain object-center w-[8.75rem] overflow-hidden shrink-0 max-w-full rounded-[60%] border-2 border-gray-200 bg-white"
          />
        </div>
        <div className="flex mt-4 items-center">
          <h1 className="text-xl font-bold flex items-center">
            Ms. Manisha Singh
            <img
              src="https://views.medibuddy.in/doctor-profile/Verfied.png"
              alt="verified"
              className="w-6 h-6 ml-1 flex-shrink-0"
            /><Link to="/Profile/EditProfile">
            <i class="fa-regular fa-pen-to-square text-lg ml-3"></i>

          </Link>
          </h1>
        </div>
        <div>
          <h2 className="text-base font-medium">Fellowship in Psychology</h2>
        </div>
        <div className="flex w-full gap-3 mt-2">
          <div className="flex items-end gap-1 flex-shrink-0">
            <img
              src="https://views.medibuddy.in/doctor-profile/health.png"
              alt="health"
              className="w-6"
            />
            <h3 className="text-sm font-bold">13+ Years Experience</h3>
          </div>
          <div className="flex gap-1 items-end">
            <img
              src="https://views.medibuddy.in/doctor-profile/StartIconflatten.png"
              alt="rating star"
              className="w-7"
            />
            <h3 className="text-sm font-bold">4410+ • 4+ star ratings</h3>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center p-2 border-2 mt-4 rounded-2xl">
            <div className="flex items-start ml-2 w-1/2 gap-2">
              <h3 className="text-base font-bold">4.65</h3>
              <img
                src="https://views.medibuddy.in/doctor-profile/GroupStar.png"
                alt="stars"
                className="w-24"
              />
            </div>
          </div>
          <div className="flex items-start mt-4 gap-2">
            <div className="overflow-hidden flex-shrink-0">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/neural-clarity-128610.appspot.com/o/android%2Fconsult%2FdefaultHospitalLogo.png?alt=media&amp;token=568d3362-2683-45ff-a863-df8e85495439"
                alt="hospital logo"
                className="w-4"
              />
            </div>
            <div className="overflow-hidden">
              <h2 className="text-base font-bold line-clamp-1">Emoneeds</h2>
              <h3 className="text-sm font-light line-clamp-2">
                Emoneeds, Q, 50, Block Q, South City I, Sector 41, Delhi/NCR
                122022
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-4 p-1 rounded-2xl flex justify-center items-center bg-rose-50 gap-2">
          <img
            src="https://views.medibuddy.in/doctor-profile/languaguelogo.png"
            alt="language"
            className="w-6"
          />
          <h3 className="text-sm font-bold">English, Hindi, Punjabi</h3>
        </div>
      </div>
  </>)
}
const Userprofile = () => {
  const cards = [
    {
      icon: 'fa-message',
      color: 'bg-danger',
      count: '1,352',
      label: 'Members',
      subText: '163 registered today',
    },
  
    {
      icon: 'fa-video',
      color: 'bg-danger',
      count: '1,352',
      label: 'Members',
      subText: '163 registered today',
    },
    {
      icon: 'fa-coins',
      color: 'bg-warning',
      count: '132K',
      label: '',
      subText: 'View History',
    },
  ];
  return (
    <>
<Mobile/>
      <div className="bg-stone-50 flex flex-col items-center pb-12 ">
        {/* Doctor Profile Header */}
        <div className="hidden sm:block bg-white w-full flex-col items-center pt-5 pb-6 px-16 max-md:max-w-full max-md:px-5">
          <div className="flex w-full max-w-[78rem] justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap">
            <div className="flex items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap">

              <img loading="lazy" src="https://docsapp-doctor.s3.us-west-2.amazonaws.com/profile_images/34003.Manisha" alt="Doctor Profile" className="aspect-[0.99] object-contain object-center w-[8.75rem] overflow-hidden shrink-0 max-w-full rounded-[60%] border-2 border-gray-200 bg-white" />
              <div className="flex flex-col">
                <button className="text-indigo-950 text-sm font-bold bg-blue-100 px-3 py-1 rounded-lg">Psychology</button>
                <h1 className="text-indigo-950 text-2xl font-bold mt-3.5">Ms. Manisha Singh <Link to="/Profile/EditProfile">
                  <i class="fa-regular fa-pen-to-square text-lg ml-3"></i>

                </Link>
                </h1>
                <h2 className="text-indigo-950 text-base font-bold mt-3">
                  BA (Hons.) (Psychology), M.Sc - Psychology, P.G. Diploma in Counselling For Substance abuse prevention and treatment
                </h2>
                <div className="flex items-center mt-5">
                  <img loading="lazy" src="https://views.medibuddy.in/doctor-profile/languages.webp" alt="Languages" className="w-6" />
                  <h3 className="text-indigo-950 text-sm font-bold ml-2">English, Hindi, Punjabi</h3>
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
                {cards.map((card, index) => (
                  <div key={index} className="p-3 bg-white shadow-md rounded-lg">
                    <Link to="CoinHistory">
                      <div className="flex items-center">

                        <span className={`stamp stamp-md ${card.color} text-white p-3 rounded-full mr-3`}>
                          <i className={`fa ${card.icon} text-lg`}></i>
                        </span>
                        <div>
                          <h5 className="mb-1 text-lg font-semibold">
                            <a href="/" className="text-gray-800">
                              {card.count} <small>{card.label}</small>
                            </a>
                          </h5>
                          <small className="text-gray-500 cursor-pointer">{card.subText}</small>
                        </div>


                      </div>
                    </Link>
                  </div>

                ))}
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


        {/* Other Sections like Reviews, Experience */}
        {/*... (Continue to convert the rest of the HTML similarly)...*/}

      </div>

     
    </>
  )
}

export default Userprofile
