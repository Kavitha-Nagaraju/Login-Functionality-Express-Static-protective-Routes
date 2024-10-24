import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function LogIn() {
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let navigate = useNavigate();
    let dispatch = useDispatch();

    let loginUsingFormData =async()=>{
        let dataToSend = new FormData();

        dataToSend.append("email",emailInputRef.current.value);
      dataToSend.append("password",passwordInputRef.current.value);

        let reqOptions={
            method:"POST",
            body:dataToSend,
        };
       try {
        let JSONData = await fetch("http://localhost:3345/login",reqOptions);
        let JSOData = await JSONData.json();
        
        console.log(JSOData)
      if(JSOData.status=="failure"){
        alert(JSOData.msg);
      }else{
         dispatch({type:"login",data:JSOData.data});
          navigate("/dashboard");
      }

       } catch (error) {
        console(error)
        
       }
    }
  return (
    <div>
    
        <form>
        <h1>Login</h1>
       <label>Email</label>
       <input ref={emailInputRef}></input>
       <label>Password</label>
       <input ref={passwordInputRef}></input>
     <div>
        <button type="button" onClick={()=>{
        loginUsingFormData();
        }}>LogIn</button></div>
        <Link to="/signup">Signup</Link>
         </form>
         
    </div>
  )
}

export default LogIn
