import React from 'react'

function Tripbutton() {
  return (
    <>
    <div class="tour-hidden-utility">
  <div class="tour-enquiry-card">
    <div class="enquiry-image">
      <img src="imges\slider img.jpg" alt="description" id="people-image"/>
    </div>
    <div class="tour-enquiry-content">
      <div class="enquiry-content">
        <div class="tour-expereince-question">
          <span>Bigger Group? Get special offers upto 50% off!</span>
        </div>
        <div class="tour-expereince">
          <span>We create unforgettable adventures, customised for your group.</span>
        </div>
      </div>
    </div>
    <div class="tour-enquiry-call">
      <button name="button" type="button" id="enquiry-call">Get a Callback</button>
    </div>
    
  </div>
</div>
      <div class="nearby-destinations__destinations-bar">
          <span class="nearby-destinations__destinations-bar-item nearby-destinations__destinations-bar-item--selected" data-trigger-grid="destination-grid-bangalore">Bangalore</span>
          <span class="nearby-destinations__destinations-bar-item " data-trigger-grid="destination-grid-mumbai">Mumbai</span>
          <span class="nearby-destinations__destinations-bar-item " data-trigger-grid="destination-grid-delhi">Delhi</span>
          <span class="nearby-destinations__destinations-bar-item " data-trigger-grid="destination-grid-jaipur">Jaipur</span>
          <span class="nearby-destinations__destinations-bar-item " data-trigger-grid="destination-grid-pune">Pune</span>
          <span class="nearby-destinations__destinations-bar-item " data-trigger-grid="destination-grid-chandigarh">Chandigarh</span>
          <span class="nearby-destinations__destinations-bar-item " data-trigger-grid="destination-grid-chennai">Chennai</span>
      </div>
    </>
  )
}

export default Tripbutton
