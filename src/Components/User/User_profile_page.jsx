import React from 'react'



const User_profile_page = ({render,setRender}) => {
 const userData= JSON.parse(localStorage.getItem("user_data"))

  return (
    <div>
  <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>
<hr />
<div>
<h2>USER NAME :</h2>
<h4>{userData.username}</h4>
<br />
<h2>USER ID :</h2>
<h4>{userData._id}</h4>
<br />
<button  className='hlo btn btn-danger' onClick={()=>{ localStorage.setItem("user_key","");
    localStorage.setItem("user_data","");setRender(!render)}} >LOGOUT USER</button>
</div>
</div>
  )
}

export default User_profile_page