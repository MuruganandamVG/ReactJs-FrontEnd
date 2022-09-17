import React,{useState} from 'react'
import APIService from './APIService';
import {useNavigate} from 'react-router-dom';
function Registration(){
    const [username,SetUsername]=useState('')
    const [password,SetPassword]=useState('')
    
    let navigate = useNavigate()

    const RegisterBtn = () =>{
        navigate('/')
        alert("you have registered successfully \n please Login")

        
        console.log({username,password})
       
        APIService.RegisterUser({username,password})
        .then(resp => console.log(resp))
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
        
        <div className='login-form'>
            <h1>Please Register</h1>
        <div className='form-group'>
            <label htmlfor="username" className='form-label'>Username</label>
            <input type='text' className='form-control' id='username' placeholder='enter your username' value={username} onChange = { e => SetUsername(e.target.value)}></input>
        </div>
        <div className='form-group'>
            <label htmlfor="password" className='form-label'>Password</label>
            <input type='password' className='form-control' id='password' placeholder='enter your password' value={password} onChange = { e => SetPassword(e.target.value)}></input>
        </div>
        <button  onClick ={RegisterBtn}className='btn btn-primary'>Register</button>

        </div>
        </div>
    )
}


export default Registration;