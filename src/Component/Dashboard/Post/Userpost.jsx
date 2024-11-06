import React from 'react'
import UserProfileCard from './UserProfileCard'
import Pageheader from '../Pageheader'


const Userpost = () => {
  return (
    <>
      <div className='m-6'>
        <Pageheader name="Moderator Profile" path="Moderator" path2="Profile"/>
        <div className='flex flex-wrap justify-center'>
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
        </div>
      </div>


    </>
  )
}

export default Userpost
