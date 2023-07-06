import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useNavigate,useLocation} from "react-router-dom";

const SignUp = () => {
  const location=useLocation();
  // const {contact}=location.state;

  
  const [contact,setContact]=useState(location.state.contact);
  const [password,setPassword]=useState("");
  const [sec,setSec]=useState("");
  const [f_name,setFName]=useState("");
  const [l_name,setLName]=useState("");
  const navigate=useNavigate();



  const setData=async ()=>{
    const data={
      f_name,
      l_name,
      mobile_no:contact,
      password
    }
    await axios.post(`http://localhost:8080/logs`, data)
          .then(await function (response) {
            console.log(response);
            navigate("/" ,{state:{data}})
          })
          .catch(function (error) {
            console.log("hsdfghj");
          });
  }

  const handleSignup=async()=>{
    if(password != sec){
      alert("Password Mismatch!!! Please re-enter the password");
    }else{
      setData();
    }
  }

  return (

    
    <div className='signup'>
      <input type="text" placeholder='Enter your First Name' value={f_name} onChange={(e)=>{setFName(e.target.value)}}/>
      <input type="text" placeholder='Enter your Last Name' value={l_name} onChange={(e)=>{setLName(e.target.value)}}/>
      <input type="text" placeholder='Enter your Mobile No.' value={contact} onChange={(e)=>{setContact(e.target.value)}}/>
      <input type="password" placeholder='Enter password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <input type="password" placeholder='Confirm password' value={sec} onChange={(e)=>{setSec(e.target.value)}}/>
      <button onClick={handleSignup}>Create Account</button>


      
    </div>
   
  )
}

export default SignUp