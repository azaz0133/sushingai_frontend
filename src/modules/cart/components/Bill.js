import React from 'react'
import './style.css'
import Logo from '../../../asset/IconSE2.jpg'
import {
    compose,
    withHandlers,
    lifecycle,
    withState
} from 'recompose'
import BillTemplate from './BillTemplate'
import {connect} from 'react-redux'
import Axios from 'axios';
import constant from '../../../constants'
const Bill =({
    products,bill
}) => (
    <BillTemplate products={products} bill={bill} />
)

export default compose(
    withState("products","setProducts",[]),
    withState('bill',"setBill",{
        amount:"",
        date:"",
        id:"",
        user:""
    }),
    connect(
        ({bill})=>({billId:bill})
    ),
    lifecycle({
        componentDidMount(){
            Axios.get(`${constant.API}/bills/query/${this.props.billId['billId']}`).then( ({data}) =>{
               const bill =  data['Bill'][0]
                this.props.setProducts(bill["lists"])
                this.props.setBill({
                    amount:bill['amount'],
                    id:bill['id'],
                    date:bill['bill_date'],
                    user:`${bill['user_id']['first_name']} ${bill['user_id']['last_name']}`
                })
            })
        }
    })
)(Bill)