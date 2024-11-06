import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserProfileCard = () => {

  return (
<div className="rounded-xl bg-white p-6 shadow-lg w-full mb-4">
  <div className="flex flex-wrap ">
    
    {/* Doctor Profile Section */}
    <div className="w-full md:w-2/3 lg:w-3/4 flex flex-wrap">
      
      {/* Profile Image and Link */}
      <div className="w-1/4 sm:w-1/5 md:w-1/4 lg:w-1/5 text-center">
        <a href="/doctors/profile/dr-kishan-a-v-id-23873">
          <picture>
            <source
              type="image/png"
              srcSet="https://docsapp-doctor.s3.us-west-2.amazonaws.com/profile_images/34003.Manisha"
            />
            <img
              className="rounded-full mx-auto w-20 h-20"
              src="https://docsapp-doctor.s3.us-west-2.amazonaws.com/profile_images/34003.Manisha"
              alt="Ms. Manisha Singh "
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
          <h3 className="text-xl font-semibold">Ms. Manisha Singh </h3>
        </a>
        <div className="text-gray-600 mt-2">8 years of Experience</div>
        <div className="text-gray-600">BA (Hons.) (Psychology), M.Sc - Psychology, P.G. Diploma in Counselling For Substance abuse prevention and treatment</div>
        <div className="text-gray-600">Kims Hospital & Research Centre, Bengaluru</div>
        
        <hr className="my-4 border-dashed border-gray-300" />

        <div className="flex items-center space-x-2">
          <p className="text-yellow-500">
            <span className="fa fa-star"></span>
            <span>4.4</span>
          </p>
          <span className="w-1 h-1 bg-black rounded-full inline-block"></span>
          <u className="text-blue-500">5137 Patient Stories</u>
        </div>
      </div>
    </div>

    {/* Consultation Section */}
    <div className="w-full md:w-1/3 lg:w-1/4 mt-4 md:mt-0">
      <div className="text-center md:text-right">
        <h3 className="text-lg font-semibold">Consultation Fee</h3>
        <div className="text-xl font-bold mt-2">₹ 399/-</div>
      </div>
      
      <div className="mt-4 text-center md:text-right">
        <a href="/">
          <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg">
            Consult Now
          </button>
        </a>
      </div>
    </div>
    
  </div>
</div>

  );
};

export default UserProfileCard;
