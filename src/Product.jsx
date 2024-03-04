import React, { useMemo, useState } from 'react'
import { adding } from './state/action';
import { useDispatch } from 'react-redux';

const Product = (props) => {
  const dispatch = useDispatch();

  const [price, upprice] = useState(props.price);

  const [quantity, upquantity] = useState(1)
  const addingitm = () => {
    upprice(price + props.price);
    upquantity(quantity + 1);
    dispatch(adding(price))
  }
  return (
    <>
      <div class="row mb-4 d-flex justify-content-between align-items-center">
        <div class="col-md-2 col-lg-2 col-xl-2">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
            class="img-fluid rounded-3" alt="Cotton T-shirt" />
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3">
          <h6 class="text-muted">Shirt</h6>
          <h6 class="text-black mb-0">Cotton T-shirt</h6>
        </div>
        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
          <button class="btn btn-link px-2"
          >
            <button type="button" class="btn btn-dark btn-block "
              data-mdb-ripple-color="dark" onClick={() => {
                upprice(price -
                  props.price); upquantity(quantity - 1)
              }}>-</button>
          </button>

          <p>{quantity}</p>


          <button class="btn btn-link px-2">
            <button type="button" class="btn btn-dark btn-block "
              data-mdb-ripple-color="dark" onClick={addingitm}>+</button>
          </button>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h6 class="mb-0">{price}</h6>
        </div>
        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
          <a href="/" class="text-muted"><i class="fas fa-times"></i></a>
        </div>
      </div>

      <hr class="my-4" />
    </>
  )
}

export default Product
