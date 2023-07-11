import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Header from './Components/routes/header/Header';
import Footer from './Components/routes/footer/footer';
import Main from './Components/Main';
import ProductScreen from './Components/routes/productScreen/ProductScreen';
import SearchByCatagory from './Components/routes/searchBycatagory/SearchByCatagory';
import CartScreen from './Components/routes/cartScreen/CartScreen';
import PaytmService from './Components/PaymentPage'
import Login from './Components/routes/SignIn/Login'
import Dashboard from './Components/dashboard';
import Register from './Components/routes/register/Register';

function App() {
  
  return (
    <div className='page_container'>
      
      <div className='content-wrap'>
        <Router>
          
        {/* <Header /> */}
        <div>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/product/:id" component={ProductScreen} ></Route>
            <Route path="/search/:keyword" component={SearchByCatagory}></Route>
            <Route path="/cart/:id?" component={CartScreen}></Route>
            <Route path="/payment" component={PaytmService}></Route>
            <Route path="/welcome" component={Dashboard}></Route>
            <Route path="/signup" component={Register}></Route>
            <Route path="/" > <Main /> </Route>
            

          </Switch>
        </div>
      </Router>
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
