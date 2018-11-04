import React from 'react'
import {
 withState,
 withHandlers,
 compose
} from 'recompose'
import './style.scss'
import {translate} from 'react-i18next'
import { connect } from 'react-redux';


const ProductCard = ({
  galleries_id:{location_pic},name,price,quantity,addToCart,add,id
}) => (
  <div className="blog-card spring-fever" style={{
    backgroundSize: "250px 250px"
  }}><br/><br/>
      <div className="col">
            <div className="product-grid2">
                <div className="product-image2">
                    <a href="#">
                        <img src={location_pic}></img>
                    </a>
                    <button className="add-to-cart btn" onClick={(e)=>addToCart(id,name,location_pic,price,e)}>Add to cart</button>
                </div>
                <div className="product-content">
                    <h3 className="title">{name}</h3>
                    <span className="price">฿{price}.00</span>
                </div>
            </div>
        </div>
</div>
)

export default compose(
)(ProductCard)