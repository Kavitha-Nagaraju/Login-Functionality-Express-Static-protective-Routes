import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'

function TopNavigation() {
    let navigate = useNavigate();
    let storeObj = useSelector((store)=>{
      return store;
    })
    useEffect(( )=>{
        if(storeObj&&storeObj.loginDetails&& storeObj.loginDetails.email){
           
        }
        else{
            navigate("/");
        }
    },[])
  return (
    <div>
     
      <div className='topNav'>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/tasks"> Tasks</Link>
        <Link to="/leaves">Leaves</Link>
        <Link to="/editProfile">EditProfile</Link>
        <Link to="/">SignOut</Link>
      </div>
    </div>
  )
}

export default TopNavigation
