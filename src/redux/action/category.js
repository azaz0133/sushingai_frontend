import {
          CREATE_CATEGORY,
          EIDT_CATEGORY,
          DELETE_CATEGORY, 
          SAVE_CATEGORY,
          LOAD_CATEGORY,
          LOAD_CATEGORIES_FAIL,
          LOAD_CATEGORIES_REQUEST,
          LOAD_CATEGORIES_SUCCESS,
          LOAD_CATEGORY_REQUEST,
          LOAD_CATEGORY_SUCCESS
} from './'
import Axios from 'axios';
import CONSTANTS from '../../constants'
import {CALL_API} from '../../middleware'


export const saveCategory = value => { 
  const {id,name,detail} = value
  return {
    type: SAVE_CATEGORY,
    category : {
      name,detail,id
    }
  }
}

export const createCategory = ( value ) => {
  const {name,detail,locationPic,nameOfPic} = value
  return {
    type: CREATE_CATEGORY,
    category : {
      name,detail
    },
    gallery : {
      location_pic:locationPic,
      alt_name:nameOfPic
    }
  }
}

export const editCategory = value => {
  const {id,name,detail} = value
  return {
    type:EIDT_CATEGORY,
    category :{
      id,
      name,
      detail
    }
  }
}

export const deleteCategory = ({id}) => {
  
  return {
    type:DELETE_CATEGORY,
    deleteId :id
  }
}

export function loadCategories() {
  return {
    [CALL_API] :{
      endpoint: `${CONSTANTS.API}/categories`,
      types:[LOAD_CATEGORIES_REQUEST,LOAD_CATEGORIES_SUCCESS]
    }
  }
}

  export function loadCategory(id) {
    return {
      [CALL_API] :{
        endpoint: `${CONSTANTS.API}/categories/${id}`,
        types:[LOAD_CATEGORY_REQUEST,LOAD_CATEGORY_SUCCESS]
      }
    }
  }