import React, {useState,useEffect} from 'react'
import './ProductScreen.css'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


export default function ProductScreen(props) {

    //fetch the data
    const [pro, setPro] = useState([])
    const [quantity, setQuantity] = useState(1)
    const history  = useHistory();
    // const { id } = useParams();
    //fetch the id from the url
    const productId = props.match.params.id;
    // console.log(id)

    useEffect(()=>{
        //here i am trying to fetch the data by using getById
        axios.get('http://localhost:9000/api/product/findAllProduct/'+ productId)
        .then(res =>{
        console.log(res)
        setPro(res.data)
        })
        .catch(err =>{
        console.log(err)
        })
    },[])

    const addToCartHandler = () =>{
        props.history.push(`/cart/${productId}?qty=${quantity}`); 
    }

    
    // const product = data.products.find(x => x._id === props.match.params.id );
    // const product = pro.find(x => x.id === Number(id) );
    // console.log(props.match.params.id )
    if(!pro){
        return <div>
            Product not found!
        </div>
    }
    else{
        return (
            <div>
                <Link className='back' to='/'>Back</Link>
                <div className='roww top'>
                    <div className='col-2'>
                        <img className='large' src={pro.image} alt={pro.productName} />
                    </div>
                    <div className='col-1'>
                        <ul className='nameing'>
                            
                                <h2>{pro.productName}</h2>
                            
                            
                                <h4 className='description'>{pro.description}</h4>
                            
                            <div className='price'>
                            ₹{pro.price}
                            </div>
                        </ul>
            
                    </div>
                    <div className='col-3'>
                        <div className='card'>
                            <ul>
                                
                                    <div className='roww'>
                                        <div>
                                            Price :
                                        </div>
                                        <div className=''>₹{pro.price}</div>
                                    </div>
                                
                                
                                    <div className='roww'>
                                        <div>
                                            Status :
                                        </div>
                                        <div className='stock'>{pro.countInStock>0? (<span className='success'> In Stock</span>):
                                        (<span className='error'>Out of Stock</span>)
                                        }</div>
                                    </div>
                                
                                <div>
                                    {
                                        pro.countInStock > 0 && (
                                            <>
                                                <div className='roww'>
                                                    <div>
                                                        Quantity
                                                    </div>

                                                    <div>
                                                        <select 
                                                            value={quantity} 
                                                            onChange={e => setQuantity(e.target.value)} >
                                                         {
                                                             [...Array(pro.countInStock).keys()].map( x=> (
                                                                 <option key={x+1} value={x+1}>
                                                                    {x+1}
                                                                </option>
                                                             ))
                                                         }
                                                        </select>
                                                    </div>

                                                </div>
                                                <button onClick={addToCartHandler} 
                                                className='primary block'>Add to Bag</button>
                                            </>
                                            
                                        )
                                    }
                                    
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
  
}

