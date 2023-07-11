  import React,{useState,useEffect} from 'react'
  import axios from 'axios'
  import './SearchByCatagory.css'
  import LoadingBox from '../../LoadingBox'
  import MessageBox from '../../MessageBox'
  import Header from '../header/Header'

  function SearchByCatagory(props) {
      const [product, setProduct] = useState([])
      const [loading,setLoading] = useState(false)
      const [error, setError] = useState(false)
      const keyword = props.match.params.keyword;
      console.log(keyword)

      useEffect(()=>{
            setLoading(true);
            axios.get('http://localhost:9000/api/product/findAllProduct/productCategory/'+ keyword)
            .then(res =>{
              setLoading(false)
              setProduct(res.data)
            },
            (err)=>{
              setLoading(false)
              setError(err.message)
              console.log(setError);
            }
            )
          
        },[])

      return (
        <>
          <Header />
        
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
                  <a href={`/product/${product.id}`} >
                    <img className='image' src={product.image}
                      alt={product.productName} />
                  </a>
                  <div className='product_body'>
                    <a  className='links' href={`/product/${product._id}`}>
                      <h2>{product.productName}</h2>
                    </a>
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
      </>
    )
  }


  export default SearchByCatagory