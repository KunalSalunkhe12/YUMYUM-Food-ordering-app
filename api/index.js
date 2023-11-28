import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

const API = axios.create({ baseURL: url });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

export const fetchRestaurants = () => API.get(`/api/restaurants`);
export const fetchMenu = (restaurantId) => API.get(`/api/menu/${restaurantId}`);

export const signup = (userData) => API.post(`/user/signup`, userData);
export const signin = (userData) => API.post(`/user/signin`, userData);

export const payment = (cartData) => API.post(`/create-checkout-session/pay`, { cartData });
export const getOrders = () => API.get(`/order`);