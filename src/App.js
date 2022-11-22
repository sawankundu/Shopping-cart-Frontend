import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Header from './Components/Header';
import Footer from './Components/footer';
import Main from './Components/Main';
import ProductScreen from './Components/ProductScreen';
import SearchByCatagory from './Components/SearchByCatagory';
import CartScreen from './Components/CartScreen';
import PaytmService from './Components/PaymentPage'
import Login from './Components/Login'

function App() {
  
  return (
    <div className='page_container'>
      
      <div className='content-wrap'>
        <Router>
        <Header />
        <div>
          <Switch>
            <Route path="/product/:id" component={ProductScreen} ></Route>
            <Route path="/search/:keyword" component={SearchByCatagory}></Route>
            <Route path="/cart/:id?" component={CartScreen}></Route>
            <Route path="/payment" component={PaytmService}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/" >
              {/* Home Page */}
              {/* <Header /> */}
              <Main />
            </Route>
            

          </Switch>
        </div>
      </Router>
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
