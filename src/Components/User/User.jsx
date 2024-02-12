import React , {useState} from 'react'
import UserLoginForm from './User_Account_Settings/UserLoginForm'
import User_profile_page from './User_profile_page'

const User = () => {
const [render,setRender]=useState(false)

  return (


<div className="container d-flex justify-content-center align-items-center " style={{height:"100vh"}} >
<div className=' rounded-5 p-2 m-5' style={{backgroundColor:"rgb(190, 189, 189)",width:"25rem",boxShadow:"25px 25px 25px black"}} >
  {
  !localStorage.getItem("user_key")&&localStorage.getItem("user_key")!=="undefined"? <UserLoginForm setRender={setRender} render={render} />:<User_profile_page setRender={setRender} render={render} />
  
}
  </div>
  </div>
  

    )
}

export default User