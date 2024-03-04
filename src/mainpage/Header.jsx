import React from 'react'
import Nav from './Nav'
import Tripbutton from './Tripbutton'
import "./mainpage.css"
import Slider from "./Slider"
import Serchbar from './Serchbar'
import Tripcard from '../component/card/Tripcard'



const Header = () => {
  return (
    <>      
       <section className='section__intro'>
        <Nav />
        <div className="herohead">
        <Serchbar />
       </div>
      </section>
      <Slider/>
      <Tripbutton/>
    <div className='trip-con'>
    <Tripcard/>
      <Tripcard/>
      <Tripcard/>
      <Tripcard/>
      <Tripcard/>
      <Tripcard/>
      <Tripcard/>
      <Tripcard/>
      <Tripcard/>
    </div>
      
    </>
  )
}

export default Header
