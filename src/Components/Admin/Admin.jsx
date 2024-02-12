import React, { useState } from 'react'
import Admin_from from './Admin_Account_Settings/Admin_Login';
import Admin_profile from '../Admin/Admin_Account_Settings/Admin_profile';
import { Link } from 'react-router-dom';


const Admin = () => {
const [render,setRender]=useState(false)

  return (
  <div style={{height:"100vh"}}>
  <div className="container d-flex justify-content-center align-items-center  " >
<div className=' rounded-5 p-2 m-5' style={{backgroundColor:"rgb(190, 189, 189)",width:"25rem",boxShadow:"25px 25px 25px black"}} >
    {
    !localStorage.getItem("admin_key")? <Admin_from setRender={setRender} render={render} />:<Admin_profile setRender={setRender} render={render} />
    
  }
    </div>
    </div>
    <div>
    {
    localStorage.getItem("admin_key")?<Link to="/admin_creator" className='btn btn-info'>Create New Movie +</Link> :""
    
  }
    </div>
  </div>

  )
}

export default Admin