import React, { useEffect, useState } from 'react'
import { AllBookingOfUser, deleteBookins } from '../../Api_Helper/Api_helper'
import { Link, useParams } from 'react-router-dom'


const UserBooking = () => {

  const {id} = useParams();
  const [rerender,setRerender]=useState(false)
  const [bookings,setBookings]=useState([]);
    
    useEffect(()=>{
        AllBookingOfUser(id)
        .then(res=>{setBookings(res)})
        .catch(err=>console.log(err))
    },[rerender]);

    const handleClick=async(id)=>{
       await deleteBookins(id);
        setRerender(!rerender)
    }

  return (
<div className="container" style={{height:"120vh"}}>
    <div className='text-center text-white my-4'>
        <h2>MOVIE BOOKINGS</h2>
    </div>
<div className="row" >
    {
        bookings&&bookings.map((data,ind)=>
        <div key={ind} className="col-lg-lg g-3" style={{fontFamily:"Dancing Script, cursive"}}>
        <div className="card position-relative d-flex text-start px-2 ">
    <div><h3>Movie Title : {data.movie.title}</h3></div>
    <div><h3>Booking Date : {data.date}</h3></div>
    <div><h3>seat Number : {data.seatNumber}</h3></div>
    <div className="position-absolute top-50 end-0 translate-middle-y">
    <button type="button" onClick={()=>handleClick(data._id)} className="btn btn-danger">Delete booking</button>
    </div>
        </div>
    </div> )
    }{
        bookings.length==0&&
        <div className='text-center text-white m-5'>
            <h3 className='m-3'>!!!--- There is no Booked data---!!!</h3>
            <br />
            <Link to="/movies" type="button" className="btn btn-info">BOOK MOVIE'S</Link>
            </div>
    }

</div>
</div>  )
}

export default UserBooking