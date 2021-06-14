import axios from 'axios'
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from '../constants/userContants'
 
export const login = (email, passowrd) => async(dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
            }
        }

        const { data } = await axios.post(
            'api/users/login',
            { email, password },
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

    } catch (error) {
        
    }
}