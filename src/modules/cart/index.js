import React from 'react'
import {
 withState,
 withHandlers,
 compose,
 lifecycle,
 branch,
 renderComponent
} from 'recompose'
import { connect } from 'react-redux'
import Cart from './components/Cart'
import { translate } from 'react-i18next'
import './style.css'
import {createBill,removeProductFromCart,removeAllProductFromCart} from '../../redux/action'
import {withRouter} from 'react-router-dom'
import {PacmanLoader} from 'react-spinners'
import { Link} from 'react-router-dom'

const style = {
    color:"black",
    textDecoration: "none"
}


const Loading = ({

}) => (
    <div>
    <PacmanLoader
      //   className={override}
             sizeUnit={"px"}
              size={150}
            color={'#123abc'}
            loading={true}
    />
    </div>
)
const CartBound = ({
    cart:{items},amount,checkOut,remove
}) => (
    <div className="container">
   <div class="shopping-cart">
   {items == "" ? 
   <div className="text-center" style={{margin:"20%"}}>
   <h4>No items in Cart</h4>
   <Link to="/menu" style={style}><button className="btn btn-info">Go to menu</button></Link></div> 
   : null}
   {items.map((data,index)=>(
    <div key={data.id}>
        <Cart data={data} remove={remove} index={index} />
    </div>
    ))}
            <div><hr/>
            {items == "" ? null : <div class="text-right" style={{margin: "10px"}}>
                    <button onClick={e=>checkOut(e)} class="btn btn-success btn3d pull-right">Checkout</button>
                    <div class="text-right" style={{margin: "5px"}}>
                        Total price: <b>฿{amount}.00</b>
                    </div>
                </div>}
            </div>
        </div>
</div>
)
export default compose(
    withRouter,
    withState('amount','setAmount',""),
    withState('isLoading',"setLoading",false),
    connect(
        ({cart,auth:{user}})=>({cart,user}),
        dispatch => ({dispatch})
    ),
    withHandlers({
        Amount: ({cart:{items},setAmount})=>_=>{
            let total = 0
            items.map(data=>{
                total+=data['price']
            })
            return total
        },
        checkOut: ({cart:{items},dispatch,amount,user,history:{push},setLoading}) => e=> {
            e.preventDefault();
            setLoading(true)
            let idProduct =[]
            for(let i =0;i<items.length;i++){
                idProduct[i]=items[i].id
            }
            dispatch(createBill(user,idProduct,amount))
            setTimeout(_=>{
            setLoading(false)
                push('/cart/bill')
            },1000)
            dispatch(removeAllProductFromCart())
        },
        remove: ({dispatch}) => (index,e) => {
            e.preventDefault();
            dispatch(removeProductFromCart(index))
        }
    }),
    lifecycle({
        componentDidMount(){
            this.props.setAmount(this.props.Amount())
        },
        componentWillReceiveProps(props){
            this.props.setAmount(this.props.Amount())
        }
    }),
    branch(
        ({isLoading}) => !isLoading ,
        renderComponent(CartBound),
        renderComponent(Loading)
    )
)()