import React,{useState,useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  import { handleResponse, handleError } from "../hooks/apiUtils";
  import { navigationContext } from "../App";
import navValues from "../helpers/navValues";


function Login(){
    const [email,setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [isSubmit,setIsSubmit] = useState(false);
    const {navigate} = useContext(navigationContext)
   
    const handleLogin =async (event)=>{
        //handle login here
        event.preventDefault();
        if(!email&& !password){
            setIsSubmit(true)
        }
        if (email && password) {
            setIsSubmit(false)
            const  login ={
                id:email,
                email:email,
                password:password
            }
            // Submit the data to the backend for authentication
           fetch(`http://localhost:3001/user/${login.id}`).then((res)=>{
                return res.json();
            }).then((respo)=>{
              if(Object.keys(respo).length === 0)  {
                toast.error('Invalid UserName.', 'error');
              }
              else{
                if(respo.password===password){
                    toast.success('Logged in Successfully', 'success');
                    //navigate(navValues.home);
                    const username = email.slice(0,email.lastIndexOf('@'))
                   //  const username = fullname + ' ' + fullname ;
                   const textForStorage = username;

                   // setter
                   localStorage.setItem('my-key', textForStorage);
                    setTimeout(() => {
                       navigate(navValues.home);
                     }, 1500); 
                }
                else{
                    toast.error('Invalid Credentials.', 'error');
                }
              }
            }).catch((err)=>{
                toast.error('Login Failed due to:'+ err.message);
            })
        // try{
        //         if(response.status!== 404){
        //             toast.success('Logged in Successfully', 'success');
        //              //navigate(navValues.home);
        //              const username = email.slice(0,email.lastIndexOf('@'))
        //             //  const username = fullname + ' ' + fullname ;
        //              setTimeout(() => {
        //                 navigate(navValues.home,username);
        //               }, 1500);  
        //         }
        //         else if(response.status === 404){
        //             toast.error('Invalid Login.', 'error');
        //         }
        //     }
        //     catch{
        //         handleError();
        //     }
        
    }
       
    }
return (
    <>
  
    <div className=' loginwrap bg-white d-flex align-items-center justify-content-center w-100'>
    <div className='loginside'></div>
<div className='login'>
    <h2 className='mb-3 text-center'>Sign-In</h2>
    <form className="needs-validation">
    <div className='form-group  mb-2'>
        <label htmlFor='email' className='form-label'>Email</label> 
        <input type='email'  className='form-control' required value={email} onChange={e=>setEmail(e.target.value)}></input>
     { isSubmit? <div className="was-validated validation">
            Please Enter Your Email
        </div>:""}
    </div>


    <div className='form-group mb-2'>
        <label htmlFor='password'  className='form-label'>Password</label> 
        <input type='password'  className='form-control' required value={password} onChange={e=>setPassword(e.target.value)}></input>
        { isSubmit? <div className="was-validated validation">
            Please Enter Your Password
        </div>:""}
    </div>
    <div className='form-group form-check mb-2'>
    <input type='checkbox'  className='form-check-input'></input>
   
        <label htmlFor='checkbox'  className='form-check-label'>Remember Me</label> 
        </div>
    <button type='submit' onClick={handleLogin} className='btn btn-success w-90 ml-1 mr-90 mt-5'>SIGN IN</button>
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
    <button type='submit'  onClick={()=> navigate(navValues.register)} className='btn btn-success w-90 ml-1 mt-2'>NEW USER</button>
    </form>
    </div>
  
</div></>
)

}

export default Login;

