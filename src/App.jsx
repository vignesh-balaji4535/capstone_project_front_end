import React,{useState} from "react";
import Header from "./Components/Header";
import {Routes,Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Movie from "./Components/Movie/Movie";
import Admin from "./Components/Admin/Admin";
import User from "./Components/User/User";
import { Forgot_Pass } from "./Components/User/User_Account_Settings/Forgot_Pas";
import Get_OTP from "./Components/User/User_Account_Settings/Verify_otp";
import New_pass from "./Components/User/User_Account_Settings/New_pass";
import Register from "./Components/User/User_Account_Settings/Register";
import AdminCreateMovie from "./Components/Admin/AdminCreateMovie";
import MovieBooking from "./Bookings/MovieBooking";
import UserBooking from "./Components/User/UserBooking";


function App() {

  const [otp,setOtp]=useState(localStorage.getItem("otp",null || ""));
  const [mail,setMail]=useState("");
  const [email,setEmail]=useState("")
  const [active,setActive]=useState("");
  const [render,setRender]=useState(false);




  return (
    <div  className="h-100" >
<Header active={active} setActive={setActive} render={render} setRender={setRender}/>
<section>
  <Routes>
    <Route path="/" element={<HomePage active={active} setActive={setActive}/>}/>
    <Route path="/movies" element={<Movie/>}/>
    {/* user login Route */}
    <Route path="/userLogin" element={<User/>}/>
    <Route path="/register" element={<Register />} />
    <Route path="/forgot" element={<Forgot_Pass setOtp={setOtp} setMail={setMail}/>} />
    <Route path="/otp" element={<Get_OTP otp={otp} setOtp={setOtp} setEmail={setEmail}/>} />
    <Route path="/newpass" element={<New_pass  otp={otp} mail={mail} email={email} setEmail={setEmail}/>} />
    {/* user boking */}
    <Route path="/booking/:id" element={<UserBooking/>}/>
    {/* Admin login Route */}
    <Route path="/admin" element={<Admin/>}/>
    <Route path="/admin_creator" element={<AdminCreateMovie/>}/>
    {/* bookings*/}
    <Route path="/movies/:id" element={<MovieBooking render={render}/>}/>
    
    
  </Routes>
</section>
    </div>
  )
}

export default App
