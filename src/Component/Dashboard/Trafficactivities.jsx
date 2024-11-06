import React from 'react'
import Traffic from './Traffic'
import Activities from './Activities'

const Trafficactivities = () => {
  return (
    <>
       <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
        <Traffic/>
        <Activities/>
       </div>
    </>
  )
}

export default Trafficactivities
