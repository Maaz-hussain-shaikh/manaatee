import React from 'react'
import StatisticsCard from './StatisticsCard'
import Trafficactivities from './Trafficactivities'
import Task from './Task'
import Clienttable from './Clienttable'
import FooterForm from './FooterForm'

import Chart  from './Chart'
import Userlistbyfilter from './Userlistbyfilter'

const Analytics = () => {
  return (
    <>
    
     <StatisticsCard/>
    
     <Userlistbyfilter/>
     <Chart/>
     <Trafficactivities/>
     <Task/>
     <Clienttable/>
     <FooterForm/> 
    </>
  )
}

export default Analytics
