import {
 CREATE_BILL_REQUEST,
 CREATE_BILL_SUCCESS
} from './'
import Axios from 'axios';
import constants from '../../constants';
import { CALL_API } from '../../middleware';

export function createBill(user,product,amount){

    return {
        [CALL_API]:{
            endpoint:`${constants.API}/bills/create`,
            body:{
                user:user.id,
                income:amount,
                id:product
            },
            method:'post',
            types:[CREATE_BILL_REQUEST,{
                type:CREATE_BILL_SUCCESS,
                payload(action,state,data){
                    const billId = data.id
                    return{
                            bill:billId,
                            amount,
                            products:product
                    }
                }
            }]
        }
    }
}
