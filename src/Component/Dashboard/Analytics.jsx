import React from 'react'
import StatisticsCard from './StatisticsCard'
import Trafficactivities from './Trafficactivities'

import Clienttable from './Clienttable'
import FooterForm from './FooterForm'

import Chart  from './Chart'
import Userlistbyfilter from './Userlistbyfilter'
import Post from './Dashpanel/Post'

const Analytics = () => {
  return (
    <>
    
     <StatisticsCard/>
     <Post/>
    
     <Userlistbyfilter/>
     <Chart/>
     <Trafficactivities/>
     
     <Clienttable/>
     <FooterForm/> 
    </>
  )
}

export default Analytics
