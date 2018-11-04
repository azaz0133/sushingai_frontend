import React from 'react'
import axios from 'axios'
import constants from '../../constants';
import change_case from 'change-case'
import {
 compose,
 withHandlers,
 lifecycle,
 withState
} from 'recompose'
import {connect} from 'react-redux'
import ProductCard from './components/productCard'
import {loadProduct,saveProductToCart} from '../../redux/action'
import {Row,Col} from 'reactstrap'
import {withRouter} from 'react-router-dom'


const Products = ({
    product,isLoading,filterByCatelog,add,addToCart
}) => (
    <div className="container">
           <Row>
               {product.map((data,i)=>(
                    <Col xs={12} lg={4} key={data.id}> 
                    <ProductCard {...data} add={add} addToCart={addToCart}/>
                   </Col>
               )
               )}
            </Row>
            <div className="text-right"><button style={{marginRight:"20px"}} className="btn btn-info btn3d" onClick={add}>Submit</button></div>
    <br/></div>
)

export default compose(
    withRouter,
    withState('product',"setProduct",[]),
    withState('cart',"setCart",[]),
    connect(
      ({product:{items,isLoading}}) => ({items,isLoading}),
      (dispatch,props) => ({
          loadProduct(){
              dispatch(loadProduct())
          },
          add(){
            dispatch(saveProductToCart(props.cart))
            props.history.push('/cart')
       }
      })
    ),
    withHandlers({
        filterByCatelog: ({match:{params},setProduct}) => items =>{
         return items.filter( data => data['categories_id']['id'] == params.id)
        },
        addToCart: ({cart,setCart}) => (id,name,locationPic,price,e) =>{
            e.preventDefault();
               setCart(cart.concat({id,name,locationPic,price}))
           }    
    }),
    lifecycle({
        async componentWillMount(){
           await  this.props.loadProduct()
        },
        async componentDidMount(){
           await this.props.setProduct(this.props.filterByCatelog(this.props.items))
        }
    }),
)(Products)