import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

export const signup = (userData) => axios.post(`${url}/user/signup`, userData);
export const signin = (userData) => axios.post(`${url}/user/signin`, userData);

export const payment = (cartData, userId) => axios.post(`${url}/create-checkout-session/pay`, { cartData, userId });