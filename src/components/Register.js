import React, { useState,useContext } from'react';

import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { handleResponse, handleError } from "../hooks/apiUtils";
import { navigationContext } from "../App";
import navValues from "../helpers/navValues";
import validator from "validator";



function Register() {
    const [email,setEmail] = useState("");
    const [message, setMessage] = useState("");
    const[password, setPassword] = useState("");
    const[ username,setUsername] = useState("");
    const [isSubmit,setIsSubmit] = useState(false);
    const {navigate} = useContext(navigationContext);


   const  handleRegister = async(event)=>{
    event.preventDefault();
    if(!email && !password && !username){
        setIsSubmit(true);
      
    }
    if (email && password && username) {
        if(validator.isEmail(email)){
     // Submit the data to the backend for authentication
     setIsSubmit(false);
     const register ={
         id : email,
         email:email,
         password:password,
         username:username
     }
const response= await fetch('https://ketzartdataorgin.onrender.com/user', {
         method: 'POST',
         headers: {
             Accept: "application/json",
             "Content-Type": "application/json",
           },
         body: JSON.stringify(register)
     })
    try{
     if(response.status!== 404){
         toast.success('Registered Successfully', 'success');
          //navigate(navValues.home);
          setTimeout(() => {
             navigate(navValues.login);
           }, 1800);  
     }
     else if(response.status === 404){
         toast.error('Invalid Registration.', 'error');
     }
    }
    catch{
     handleError();
    }
        }
        else{
setMessage("Please Enter Valid Email")
        }
   
    
    



    }
   
   }
    return(
   
        <div className=' registerwrap bg-white d-flex align-items-center justify-content-center w-100'>
                <div className='registerside'></div>
<div className='register'>
    <h2 className='mb-2 text-center'>REGISTER </h2>
    <form className="needs-validation">

    <div className='form-group mb-2'>
        <label htmlFor='password'  className='form-label'>UserName</label> 
        <input type='text'  className='form-control' value={username} onChange={e=>setUsername(e.target.value)}></input>
        { isSubmit? <div className="was-validated validation">
            Please Enter Your UserName
        </div>:""}
    </div>
  
    <div className='form-group mb-2'>
        <label htmlFor='email' className='form-label'>Email</label> 
        <input type='email'  className='form-control' value={email} onChange={e=>setEmail(e.target.value)}></input>
        { isSubmit? <div className="was-validated validation">
            Please Enter Your Email
        </div>:""}
        <span className="validation">{message}</span>
    </div>
  

    <div className='form-group mb-2'>
        <label htmlFor='password'  className='form-label'>Password</label> 
        <input type='password'  className='form-control' value={password} onChange={e=>setPassword(e.target.value)}></input>
        { isSubmit? <div className="was-validated validation">
            Please Enter Your Password
        </div>:""}
    </div>
   
    <button type='submit' onClick={handleRegister} className='btn btn-success w-100 mt-4'>REGISTER</button>
    <ToastContainer
position="top-center"
autoClose={8000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
    <button type='submit'onClick={() => {
                  navigate(navValues.login)
                }}  className='btn btn-success w-100 mt-2'>CANCEL</button>

    </form>
    </div>
</div>
    );
            };
export default Register ;