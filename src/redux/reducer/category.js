import {
  CREATE_CATEGORY,
  EIDT_CATEGORY,
  DELETE_CATEGORY,
  SAVE_CATEGORY,
  LOAD_CATEGORY,
  LOAD_CATEGORIES_REQUEST,
  LOAD_CATEGORIES_SUCCESS,
  LOAD_CATEGORY_REQUEST,
  LOAD_CATEGORY_SUCCESS
} from '../action'
import Axios from 'axios'
import CONSTANTS from '../../constants'

const initialState = {
  isLoading: false,
  items:[]
}

  export default (state = initialState , { type,gallery,category,payload,deleteId}) => {
      switch (type) {
        case LOAD_CATEGORY_REQUEST :
        case LOAD_CATEGORIES_REQUEST:
          return {
             isLoading:true,
             items:[]
          }
        case LOAD_CATEGORY_SUCCESS : 
          return {
            isLoading:true,
            item:payload.categories 
          }
        case LOAD_CATEGORIES_SUCCESS: 
          if(payload.categories === undefined) payload.categories= []
        return {
                items:payload.categories,
                isLoading:false
            }
        case DELETE_CATEGORY:
        return Axios.delete(`${CONSTANTS.API}/categories/delete/${deleteId}`)
                    .then( res=>res)
                    .catch( err => console.error(err))

        case SAVE_CATEGORY: state = payload.categories
        return state

        case CREATE_CATEGORY:
        return Axios.post(`${CONSTANTS.API}/galleries/create`,gallery)
                .then( ({data:{gallery:{id}}}) => {
                    Axios.post(`${CONSTANTS.API}/categories/create`,{category,gallery_id:id})
                          .then( res=>res )
                          .catch(err => console.log(err))
                }).catch(err => console.log(err))

        case EIDT_CATEGORY:
        return  Axios.put(`${CONSTANTS.API}/categories/edit/${payload.categories.id}`,payload.categories)
                    .then( res=>res )
                    .catch( err => console.log(err))

        default:
          return state
      }
    }