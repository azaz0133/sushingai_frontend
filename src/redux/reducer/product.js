import {
 LOAD_PRODUCT_REQUEST,
 LOAD_PRODUCT_SUCCESS
} from '../action'

const initialState = {
    isLoading: false,
    items:[]
  }

  export default (state = initialState, {type,payload}) => {

       switch (type) {
            case LOAD_PRODUCT_REQUEST:
            return {
                isLoading:true,
                items:[]
             }
            case LOAD_PRODUCT_SUCCESS:
            if(payload[`products`] === undefined) payload[`products`]= []
            return {
                isLoading:false,
                items:payload.products
             }
           default:
            return state
       }
  }