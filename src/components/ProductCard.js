import React from 'react'
import "../styles/productCardStyle.css"
const productCard = ({productData}) => {
  return (
    <>
      <div class="d-flex container ">
        <div class="card p-3 bg-white"><i class="fa fa-apple"></i>
            <div class="about-product img-fluid text-center mt-2"><img src="https://i.imgur.com/3VTaSeb.png" width="300" alt=''/>
                <div>
                    <h4>Believing is seeing</h4>
                    <h6 class="mt-0 text-black-50">Apple pro display XDR</h6>
                </div>
            </div>
            <div class="stats mt-2">
                <div class="d-flex justify-content-between p-price"><span>Pro Display XDR</span><span>$5,999</span></div>
                <div class="d-flex justify-content-between p-price"><span>Pro stand</span><span>$999</span></div>
                <div class="d-flex justify-content-between p-price"><span>Vesa Mount Adapter</span><span>$199</span></div>
            </div>
            <div class="d-flex justify-content-between total font-weight-bold mt-4"><span>Price</span><span>${productData.price}.00</span></div>
        </div>
    </div>
    </>
  )
}

export default productCard