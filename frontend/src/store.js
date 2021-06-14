import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { 
    productListReducer, 
    productDetailsReducer 
} from './reducer/productReducers'
import { cartReducer } from './reducer/cartReducers'
import { userLoginReducer } from './reducer/userReducers'
  

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer, 
    userLogin: userLoginReducer,      
})

const cartItemsFromStorage = localStorage.getItem('cartItems') 
    ? JSON.parse(localStorage.getItem('cartItems')) 
    : []

const userInforomStorage = localStorage.getItem('userInfo') 
    ? JSON.parse(localStorage.getItem('userInfo')) 
    : null   

const initialState = {
    cart: { cartItems: cartItemsFromStorage },
    userLogin: { userInfo: userInforomStorage}
}

const middlware = [thunk]

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middlware)))

export default store