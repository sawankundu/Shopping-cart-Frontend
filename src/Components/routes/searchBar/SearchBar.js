import React,{useState,useEffect} from 'react'
import SearchIcon from "@material-ui/icons/Search"
import { useHistory } from 'react-router-dom';
import './SearchBar.css'
import {IoSearch,IoClose} from "react-icons/io5"
// import history from 'history';

function SearchBar() {
    const [product, setProduct] = useState([])
    const [keyword, setKeyword] = useState('')
    const history = useHistory();

    function SearchHandler(event){
        event.preventDefault()     
       if(keyword){
            history.push(`/search/${keyword}`)
        }else{
            history.push("/")
    }
    }
   
  return (
      <div className='nav'>
        <form className='search' onSubmit={SearchHandler}>
            
            <IoSearch className='StartIcon'/>
            
            <input 
                type='text' 
                placeholder='Search for products, styles, brands' 
                className='header_search' 
                onChange={(e) => setKeyword(e.target.value.toLocaleLowerCase())}
            />
            
            {/* <IoClose className='CloseIcon'/> */}
            


            {/* <SearchIcon className='Search_icon' /> */}
        </form>
      </div>

    
  )
}

export default SearchBar