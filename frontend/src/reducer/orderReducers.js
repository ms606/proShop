import {
    ORDER_CREATE_FAIL,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_REQUEST,
} from '../constants/orderConstants'

export const orderCreateReducer = (state = {}, action) => {
    switch(action.type) {
        case ORDER_CREATE_REQUEST:
          return {
              loading: true
          }
        default:
          return state  
    }
}