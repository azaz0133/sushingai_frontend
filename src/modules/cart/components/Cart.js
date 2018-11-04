import React from 'react'
import {
 compose,
 withHandlers,
 withState
} from 'recompose'
import {connect} from 'react-redux'
import {Row,Col} from 'reactstrap'
import styled from 'styled-components'
import '../style.css'

const Img = styled.img`
border-radius: 50%;
width: 200px;
height: 200px;
`
const Cart = ({
data,remove,index
}) => (
        <div class="container">
                    <div class="row" style={{paddingRight:"15px"}}>
                        <div class="col text-center">
                                <img class="img-responsive" src={data['locationPic']} alt="product" width="220" height="80"></img>
                        </div>
                        <div class="col text-sm-center text-md-left ">
                            <h4 class="product-name"><strong>{data['name']}</strong></h4>
                        </div>
                        <div class=" text-sm-center col text-md-right row">
                            <div class="col text-md-right" style={{paddingTop: "5px"}}>
                                <h6><strong>฿{data['price']} x 1</strong></h6>
                            </div>
                            <div class="col text-right">
                                <button  type="button" onClick={e=>remove(index,e)} class="btn btn-danger btn3d btn-xs">
                                    remove
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr/>
            </div>
        
)
export default connect(
     null
 )(Cart)