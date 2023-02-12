import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthUser from './AuthUser';


export default function Login() {
    // const navigate = useNavigate();
    const history = useHistory();
    const {http,setToken,getUserRole} = AuthUser();
    const [username,setUSername] = useState();
    const [password,SetPassword] = useState();
  
  const login = () => {
    http.post('/token',{username:username,password:password}).then((res)=>{
      console.log(res.data);
      setToken(res.data.token,res.data.userDetails)
      history.push("/");
      getUserRole();
    })
  }
  
    return (
      <div>
        <div>
            <input type="text" onChange={e=> setUSername(e.target.value)}></input><br></br>
            <input type="password" onChange={e=> SetPassword(e.target.value)}></input><br></br>
            <button onClick={login}>
              Login
            </button>
          </div>
      </div>
    )
}
