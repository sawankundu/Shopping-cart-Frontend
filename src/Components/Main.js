import React, {useState,useEffect} from 'react'
import './main.css'
import axios from 'axios'
import LoadingBox from './LoadingBox'
import MessageBox from './MessageBox'
import {  Link } from "react-router-dom"



function Main() {
  const [product, setProduct] = useState([])
  const [loading,setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(()=>{
      setLoading(true);
      axios.get('http://localhost:9000/api/product/findAllProduct')
      .then(res =>{
        setLoading(false)
        setProduct(res.data)
      },
      (err) =>{
        setLoading(false)
        setError(err.message)
        console.log(setError)
      }
      )
  },[])
  return (
    <div>
      {
        loading ? (
            <LoadingBox></LoadingBox>
        ) :error ? (
          <MessageBox variant='danger'>{error}</MessageBox>
        ) : (<main>
          <div className='product_list'>
            {
              product.map(product => (
                //  pictures
              <div  key={product.id} className='product'>
                <Link to={`/product/${product.id}`} >
                  <img className='image' src={product.image}
                    alt={product.productName} />
                </Link>
                <div className='product_body'>
                  <Link  className='links' to={`/product/${product._id}`}>
                    <h2>{product.productName}</h2>
                  </Link>
                  {/* <div className='product_desc'>
                    <h5>Black Casual Bhagalpuri Silk Printed Saree with Unstitched Blouse with Unstitched</h5>
                  </div> */}
                  <div className='product_price'>
                    ₹{product.price}
                  </div>
  
                </div>  
            </div>
  
                
              ))
            }
           
            
          </div>
        </main>)
      }
      
    </div>
  )
}

export default Main