import React, { useState } from 'react'

const Admin_profile = ({render,setRender}) => {
 const adminData= JSON.parse(localStorage.getItem("admin_data"))


  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" className="bi bi-person-workspace" viewBox="0 0 16 16">
  <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
  <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z"/>
</svg>
<hr />
<div>
  <h2>ADMIN NAME :</h2>
  <h4>{adminData.adminName}</h4>
  <br />
  <h2>ADMIN ID :</h2>
  <h4>{adminData._id}</h4>
  <br />
<button  className='hlo btn btn-danger' onClick={()=>{ localStorage.setItem("admin_key","");
    localStorage.setItem("admin_data","");setRender(!render)}} >LOGOUT ADMIN</button>
</div>
    </div>
  )
}

export default Admin_profile