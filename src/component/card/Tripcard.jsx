import React from 'react'
import "../card/card.css"
const Tripcard = () => {
  return (
    <>
      <div class="tour-card-v2 slick-slide slick-active" data-slick-index="1" aria-hidden="false" role="tabpanel" id="slick-slide51">
        <div data-href="/tours/leh-ladakh-sightseeing-tour" target="_blank" class="tour-card-v2__wrap onclick-link " data-id="72567">
          <div class="tour-card-v2__banner">
            <img src="imges\slider img.jpg" className="lazy-picture tour-card-v2__image lazy-picture-loaded" alt="--" />
            <div class="tour-card-v2__legibility-gradient"></div>
            <div class="tour-card-v2__banner-data-wrap">
              <span class="tour-card-v2__tags">
              </span>

              <ul class="tour-card-v2__additional-info">
                <span>6D/5N</span>
              </ul>
            </div>
          </div>
          <div class="tour-card-v2__details-wrap">
            <a href="/tours/leh-ladakh-sightseeing-tour" class="tour-card-v2__name" target="_blank" tabindex="0">Leh Ladakh Sightseeing Tour Package</a>
            <div class="tour-card-v2__reviews-wrap">
              <div class="icon-star-empty"></div>
              <div class="tour-card-v2__average-rating">4.39</div>
              <div class="tour-card-v2__reviews-count">(9229 Reviews)</div>
            </div>
            <div class="tour-card-v2__price-and-cta-wrap">
              <div class="tour-card-v2__pricing">
                <span class="old-price">

                  <span class="th-currency-tag" data-currency="INR" data-amount="27500.0">₹ 27500.00</span>
                </span>
                <span class="current-price">

                  <span class="th-currency-tag" data-currency="INR" data-amount="17745.0">₹ 17745.00</span>
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tripcard
