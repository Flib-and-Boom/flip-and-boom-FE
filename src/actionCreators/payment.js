import axios from "axios";
import { fetchUserProfile, setLoading } from "./fetchUserProfile";
import { API_URL } from "../config";

export const getTokenMidtrans = (payload) => {
    return {
        type: 'midtrans/token',
        payload
    }
}

export function fetchGetTokenMidtrans(amount) {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://localhost:3000/user/token-midtrans', { amount }, {
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
            // console.log(data.token, 'ini response axios');
            dispatch(getTokenMidtrans(data.token))
        } catch (error) {
            console.log(error);
        }
    }
}


export function fetchSuccesPayment(payload) {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://localhost:3000/user/topup', payload, {
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
            // tampilkan ke modal
            console.log(data, '<<<<<< response server after payment');
            // dispatch user
            dispatch(fetchUserProfile())
            // dispatch profile lagi
        } catch (error) {
            console.log(error);
        }
    }
}

export function fetchBuyItem(payload) {
    return async (dispatch) => {
        try {
            dispatch(setLoading(true))
            const { data, status } = await axios.post(API_URL + '/buyItem', payload, {
                headers: {
                    'access_token': localStorage.getItem('access_token')
                }
            })
            console.log(data.message, 'response setelah berhasil');
            console.log(status, 'response'); // 201
        } catch (error) {
            console.log(error.response.data.message);
            // error handle
        } finally {
            dispatch(fetchUserProfile())
            dispatch(setLoading(false))
        }
    }
}