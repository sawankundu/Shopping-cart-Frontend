import React, { useState, useEffect } from "react";
import "./main.css";
import axios from "axios";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { Link, Redirect, useHistory } from "react-router-dom";
import AuthUser from "./AuthUser";
import Header from "./routes/header/Header";
import NavMain from "./NavMainBar/NavMain";
import { FilterBox } from "./FilterBoxSide/FilterBox";

function Main() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { isLoggedIn, doLogout, getUser } = AuthUser();
  const history = useHistory();

  const [user, setUser] = useState([]);

  // useEffect(() => {
  //   const userDetails = getUser();
  //   const fullName = userDetails.fullName;
  //   const fullNameArray = fullName.split(" ");
  //   const firstName = fullNameArray[0].charAt(0).toUpperCase() + fullNameArray[0].slice(1);
  //   setUser(firstName);
  // },[]);

  const logout = () => {
    doLogout();
    history.push("/login");
  };

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:9000/api/product/findAllProduct").then(
      (res) => {
        setLoading(false);
        setProduct(res.data);
      },
      (err) => {
        setLoading(false);
        setError(err.message);
        console.log(setError);
      }
    );
  }, []);

  //==================================================
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Enable/disable scrolling on the main page
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };
  // ===================================================
  if (isLoggedIn()) {
    const userDetails = getUser();
    const fullName = userDetails.fullName;
    const fullNameArray = fullName.split(" ");
    const firstName =
      fullNameArray[0].charAt(0).toUpperCase() + fullNameArray[0].slice(1);
    console.log("welcome");
    return (
      <>
        <Header />

        <div>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <main className="home">
              <NavMain firstName = {firstName}/>
              
              <div className="-row">
                {/* <div className="filterBox">
                  <FilterBox />
                </div> */}
                <div className="product_list ">
                  {product.map((product) => (
                    //  pictures
                    <div key={product.id} className="product">
                      <Link to={`/product/${product.id}`}>
                        <img
                          className="image"
                          src={product.image}
                          alt={product.productName}
                        />
                      </Link>
                      <div className="product_body">
                        <Link className="links" to={`/product/${product._id}`}>
                          <h2>{product.productName}</h2>
                        </Link>
                        {/* <div className='product_desc'>
                          <h5>Black Casual Bhagalpuri Silk Printed Saree with Unstitched Blouse with Unstitched</h5>
                          </div> */}
                        <div className="product_price">₹{product.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </main>
          )}
        </div>
      </>
    );
  } else {
    return (
      <>
        <Redirect to="/login" />
      </>
    );
  }

  // ===================================================

  // return (
  //   <div>
  //     {
  //       loading ? (
  //           <LoadingBox></LoadingBox>
  //       ) :error ? (
  //         <MessageBox variant='danger'>{error}</MessageBox>
  //       ) : (<main>
  //         <div className='product_list'>
  //           {
  //             product.map(product => (
  //               //  pictures
  //             <div  key={product.id} className='product'>
  //               <Link to={`/product/${product.id}`} >
  //                 <img className='image' src={product.image}
  //                   alt={product.productName} />
  //               </Link>
  //               <div className='product_body'>
  //                 <Link  className='links' to={`/product/${product._id}`}>
  //                   <h2>{product.productName}</h2>
  //                 </Link>
  //                 {/* <div className='product_desc'>
  //                   <h5>Black Casual Bhagalpuri Silk Printed Saree with Unstitched Blouse with Unstitched</h5>
  //                 </div> */}
  //                 <div className='product_price'>
  //                   ₹{product.price}
  //                 </div>

  //               </div>
  //           </div>

  //             ))
  //           }

  //         </div>
  //       </main>)
  //     }

  //   </div>
  // )
}

export default Main;
