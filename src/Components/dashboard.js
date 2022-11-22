import React from 'react'
import { Navigate , useHistory} from 'react-router-dom';
import AuthUser from './AuthUser';
import authHeader from './auth-Header'
import axios from 'axios'
import SecuredPage from './SecuredPage';

export default function Dashboard() {
    // const navigate = useNavigate();
    const history = useHistory();
    const {isLoggedIn,doLogout} = AuthUser();
    // const {setPrivatePage} = SecuredPage();

    const logout = () =>{
        doLogout();
        history.push("/login");
    }

    const getSecurePage = () =>{
        axios.get("http://localhost:9002/welcome", {headers : authHeader()}).then((res) =>{
            console.log(res.data);
            // setPrivatePage(res.data);
        })
    }

    if(isLoggedIn()){
        console.log("welcome")
        return (
            <>
                <h1>"Welcome user!"</h1>
                <a href='/secure' onClick={getSecurePage}>Backendpage</a><br></br>
                <button onClick={logout}>Logout</button>
            </>
        )
    }else{
        return  <Navigate to={"/login"} />;
    }
  
}
