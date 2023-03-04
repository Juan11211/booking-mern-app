import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import '/Login.css'

const Login = () => { 
    const [creditionals, setCreditionals] = useState({
        username: undefined, 
        password: undefined,
    });

const {user, loading, error, dispatch} = useContext(AuthContext);

    return ( 
        <div className="loginForm">
           <div className="login-container">
            <input placeholder="username" type='text' id='username' onChange={handleChange} className='input' /> 
            <input placeholder="password" type='text' id='password' 
            onChange={handleChange} className='input' />
        <button disabled={loading} onClick={handleClick} className="login-button">Login</button>
        </div>
            </div>
    )
}