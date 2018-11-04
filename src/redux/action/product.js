import {
    LOAD_PRODUCT_REQUEST,
    LOAD_PRODUCT_SUCCESS,
    LOAD_PRODUCT_FAIL
} from './'
import Axios from 'axios';
import CONSTANTS from '../../constants'
import {CALL_API} from '../../middleware'

export function loadProduct() {
    return {
      [CALL_API] :{
        endpoint: `${CONSTANTS.API}/products`,
        types:[LOAD_PRODUCT_REQUEST,LOAD_PRODUCT_SUCCESS]
      }
    }
  }
  