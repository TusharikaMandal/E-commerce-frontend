import React, { useState } from 'react'
import './css/LoginSignup.css'

const LoginSignup = () => {
  const [state,setState]=useState('Login');
  const [formData,setFormData]=useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const login=async()=>{
    console.log("Login Fuction Execution",formData);
    let responseData;
    await fetch('http://localhost:4000/login',{//saga09@gmail.c0m   sago
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }
  }

  const signUp=async()=>{
    console.log("Signup Function Exection",formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }
  }
  return (
    <div className='loginsignup'>
      <div className="login-container">
        <h1>
          {state}
        </h1>
        <div className="loginsignup-field">
          {state==="Sign Up"?<input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' id="" />:<></>}
          <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder='Your E-mail Address' id="" />
          <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder='Password' id="" />
        </div>
        <button onClick={()=>{state==="Login"?login():signUp()}}>Continue</button>
        {state==="Sign Up"?
        <p className="loginsignup-login">Already Have An Account? <span onClick={()=>{setState("Login")}}>Login Here</span></p>:
        <p className="loginsignup-login">Create an Account? <span onClick={()=>{setState("Sign Up")}}>Click Here</span></p>}
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the term of use & privacy policy</p>
        </div>
      </div>      
    </div>
  )
}

export default LoginSignup
