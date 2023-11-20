import React, { useState } from 'react'
import './Signup.css'
import {useNavigate} from "react-router-dom";

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

const LoginSignup = () => {
    const navigate=useNavigate()

    const [action,setAction] = useState("Sign Up");
    const [logindetails,setLoginDetails]=useState({username:"",email:"",password:""});

    const handleChange=(e)=>{
      const {name,value}=e.target;
      setLoginDetails({...logindetails,[name]:value});
    };

    const handleAdmin=()=>{
      navigate("/admin")
    }

   const  handleRegister=async()=>{
      let headers={
        method:"POST",
        body:JSON.stringify(logindetails),
        headers:{
          "content-type":"application/json"
        },
      };
      let resp=await fetch("http://localhost:5500/User/register",headers);
      let result=await resp.json();
      if(result.Status === "200"){
        alert("You Register Successfully")
        setAction("Login")
      }else{
        alert(`Error:${result.Status}`)
        setAction("Sign Up");
      }    
    }

    const handleLogin=async()=>{
      setAction("Login")
      let headers={
        method:"POST",
        body:JSON.stringify(logindetails),
        headers:{
          "content-type":"application/json"
        },
      };
      let resp=await fetch("http://localhost:5500/User/login",headers);
      let result=await resp.json();      
      if(result.Status){
        alert(`${result.Msg}`)
      }
      else{
        alert("Login Sucessfull")
        localStorage.setItem("isLogin",result)
      }
    }

  return (
        <div className='container-right'>
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
          {action==="Login"?<div></div>: <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" name='username' placeholder="Username" onChange={handleChange} />
            </div>}
         
           <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email Id" name='email' onChange={handleChange} />
            </div>
            <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" name='password' onChange={handleChange} />
            </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click here!</span></div>}
            
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>handleRegister()}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>handleLogin()}>Login</div>
            </div>
            <div className='Admin'>Are you an Admin? <span onClick={handleAdmin}>Log in</span></div>
        </div>
  )
}

export default LoginSignup;