import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../Constants/cartConstants";
import Axios from 'axios';

export const addToCart = (productId,qty) => async(dispatch, getState) => {
    const {data} = await Axios.get(`http://localhost:9000/api/product/findAllProduct/${productId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            name : data.productName,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            description: data.description,
            product: data.id,
            qty, 

        },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};


export const removeFromCart = (productId) => (dispatch, getState) =>{
    dispatch({type:CART_REMOVE_ITEM, payload: productId});
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}
 