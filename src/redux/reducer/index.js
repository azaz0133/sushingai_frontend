import { combineReducers } from 'redux'
import user from './user'
import auth from './auth'
import category from './category'
import product from './product'
import cart from './cart'
import bill from './bill'
export default combineReducers({
  user,
  auth,
  category,
  product,
  cart,
  bill
})