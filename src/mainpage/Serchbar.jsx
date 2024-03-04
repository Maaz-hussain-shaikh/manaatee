import React from 'react'

const Serchbar = () => {
  return (
    <>
   <div className="container">
    <div className="section__intro__main intro-heading">
      <div className="intro-heading__search-wrap" id="home-banner-search">
        <div className="search-wrap__tags-bar mobile-hidden">
          <button className="tags-bar__tag active" data-tab-name="all">
            <span className="tag-icon icon-globe-white"></span>All
          </button>
          <button className="tags-bar__tag" data-tab-name="activities">
            <span className="tag-icon icon-boat-white"></span>Activities
          </button>
          <button className="tags-bar__tag" data-tab-name="tours">
            <span className="tag-icon icon-traveler-white"></span>Tours
          </button>
          <button className="tags-bar__tag" data-tab-name="rentals">
            <span className="tag-icon icon-cab-white"></span>Rentals
          </button>
          <button className="tags-bar__tag" data-tab-name="staycations">
            <span className="tag-icon icon-home-white"></span>Staycations
          </button>
        </div>
      </div>
    </div>
  </div>
      <div className="sc-f1932929-1 dfBLcg"><input type="input" autocomplete="off" name="search" placeholder="where do you want to go" className="sc-f1932929-2 ibbWOl"/><button id="search" aria-label="search-button" className="sc-f1932929-4 zehgg"></button></div>
    </>
  )
}

export default Serchbar
