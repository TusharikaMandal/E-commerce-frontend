import React from 'react'
import './DiscriptionBox.css'

const DiscriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="discriptionbax-nav-box">Description</div>
        <div className="discription-nav-box fade">Reviews(122)</div>
      </div>
      <div className="discriptionbox-description">
        <p>An e-commerce website is an online platform that facilitates buying and selling poducts or services over the internet.
          It serves as a virtual marketplace where business and individual chowcase their products, interact with customers and conduct
          transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility and 
          global reach they offer.
        </p>
        <p>E-commerce website typically display products or services along with details descriptions, images, prices and any availability variation (eg. size,color
          .Each product usually has its own dedicated page with related information.
        </p>
      </div>
    </div>
  )
}

export default DiscriptionBox
