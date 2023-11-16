import axios from 'axios';

const url = 'http://localhost:3000';

export const signup = (userData) => axios.post(`${url}/user/signup`, userData);
export const signin = (userData) => axios.post(`${url}/user/signin`, userData);

export const payment = (cartData) => axios.post(`${url}/create-checkout-session`, { cartData });