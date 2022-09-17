import React ,{useState,useEffect}from 'react';
import APIService from './APIService';
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';



function Login(){

    const [username,SetUsername]=useState('')
    const [password,SetPassword]=useState('')
    console.log({username,password})
    const [token,setToken] = useCookies(['mytoken'])
     
    let navigate = useNavigate()
    useEffect(() =>{
        console.log("cookie ----->", token)
        if ( token['mytoken'] && token['mytoken']!="undefined"){
            navigate('../dashboard')
        }
    },[token])

    const loginBtn = () =>{
        console.log({username,password})
        
        APIService.LoginUser({username,password})
        .then(resp => setToken('mytoken',resp.token))
        .catch(error => console.log(error))
    }
    
    return(
        <div className='login'>
        <header>
            <nav id='header-nav' className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-brand">
                        <h1 style={{color: "white"}}>Welcome to Login Page</h1>
    
                    </div>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="/"><h3>Home</h3></a>
                        </li>
                       
                      </ul>
    
                </div>
    
            </nav>
            
        </header>
        <body>
       
        <div className='login-form'>
            <h1 >Please login</h1>
        <div className='form-group'>
            <label htmlfor="username" className='form-label'>Username</label>
            <input type='text' className='form-control' id='username' placeholder='enter your username' value={username} onChange = { e => SetUsername(e.target.value)}></input>
        </div>
        <div className='form-group'>
            <label htmlfor="password" className='form-label'>Password</label>
            <input type='password' className='form-control' id='password' placeholder='enter your password' value={password} onChange = { e => SetPassword(e.target.value)}></input>
        </div>
        <button  onClick ={loginBtn}className='btn btn-primary'>Login</button>
        <p>If you don't have account <a href='/Registration'>Register</a></p>
        <div className='background'>
            <img>
            </img>
        </div>

        </div>
        </body>
        </div>
        
        
        
    )
}
export default Login;
