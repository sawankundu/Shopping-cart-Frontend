import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import './cartScreen.css'
import { addToCart, removeFromCart } from '../Actions/CartActions';
import {useSelector} from 'react-redux';
import $ from 'jquery'; 

import PaytmService from './PaymentPage'

function CartScreen(props) {
    const [pro, setPro] = useState([])
    const [amount, setAmount] = useState('')
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1 ;


    const cart = useSelector((state)=> state.cart);
    const {cartItems} = cart;

    const dispatch= useDispatch();
    useEffect(()=>{
      if(productId){
        dispatch(addToCart(productId, qty));
      }
    }, [dispatch, productId, qty])

    const removeFromCArtHandler =(id) =>{
      dispatch(removeFromCart(id));
    };

    const addressDetails =() =>{
      // const amount = data.amount;
      let Amount = $("#user_subtotal").val();
      // const amount1 = document.querySelector("#user_subtotal").value
      // console.log(amount1);
      console.log("Under address fun" +Amount);
      
      axios.get('http://localhost:9002/address')

      // PaytmService.getAddressPage();

    }
    
  return (
    <div className='cartscreen'>
      <div className='cart_add'>
        <img className='checkout_image' src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/Holiday/EpicDailyDeals/LandingPage/HOL21_EDD_Phase5_hero-banner_short_desktop_1500x150.jpg"
            alt="Something went wrong."
        /> 
      </div>
      <div className='cart-none'>
        {
          cartItems.length === 0 ?(
            <div className='cart_none_msg'>
                  <h2 className='checkout_title'>Your Shopping Basket is empty</h2>
                  <p>
                      You have no items in your basket.To buy one or more items,click
                      "Add to Bag" next to the item.
                  </p>
              </div>  
          ) : (
            <div className=''>
              <h2 className='checkout_title'>Your Shopping Basket</h2> 
              {
                cartItems.map((item) => (
                  <div key={item.product}>
                    <div className='cart_item'>
                        <div>
                          <img src={item.image} alt={item.productName} className='small' ></img>
                        </div>
                        <div className='cart-info'>
                          <div className='min-30'>
                              <Link className='product_items' to= {`/product/${item.product}`}><h2>{item.name}</h2></Link>
                          </div>
                          <div>
                            <h4 className='product_description'>{item.description}</h4>
                          </div>
                          <div className='cart_price'>
                              <h2>₹{item.price}</h2>
                          </div>
                          <div className='quantity'>
                            <select
                              value={item.qty}
                              onChange={
                                (e) => dispatch(
                                  addToCart(item.product,Number(e.target.value))                                 
                                )
                              }
                            >
                              {[...Array(item.countInStock).keys()].map( x=> (
                                  <option key={x+1} value={x+1}>
                                    {x+1}
                                  </option>
                              ))}
                            </select>
                          </div>        
                          <div className='remove'>
                              <button type='button' onClick={() => removeFromCArtHandler(item.product)}>REMOVE</button>
                          </div>
                        </div>
                    </div>
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
      <div className='total'>
        <div>
          <div className='subtotal' >
            <h2 >
              Subtotal ({cartItems.reduce((a,c)=> a+ c.qty, 0)} items) : 
              ₹<span id="user_subtotal">
              {cartItems.reduce((a,c)=>a+c.price * c.qty , 0)}
               </span>
               
            </h2>
          </div>
          <a  className='checkout_button' 
            
            // onClick={e => addressDetails()}
            href="http://localhost:9002/address"
            >
            <button type='button' disabled={cartItems.length===0} 
            >
              Proced to Checkout
            </button>
          </a>
        </div>
      </div>
        
    </div>
  )
}


export default CartScreen