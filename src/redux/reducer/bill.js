import {
 CREATE_BILL_REQUEST,
 CREATE_BILL_SUCCESS
} from '../action'

const initialState = {
    billId:"",
    amount:"",
    products:[]
}

export default (state=initialState,{type,payload}) => {
    switch (type) {
        case CREATE_BILL_REQUEST:
            
        case CREATE_BILL_SUCCESS:
         if(payload !== undefined)
           return {
               billId:payload.bill,
               amount:payload.amount,
               products:payload.products
           }
    
        default:
            return state
    }
}