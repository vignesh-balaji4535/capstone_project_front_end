import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { bookMovieById, getMovieDataById } from "./../Api_Helper/Api_helper.jsx";
import { Formik, Field, Form } from 'formik';
import SuccessPopUp from '../Pop_ups/Success_pop_up.jsx';
import User from '../Components/User/User.jsx';



const MovieBooking = ({render}) => {

  const [showSuccess, setShowSuccess] = useState(false);
  const [movieData,setMovieData]=useState({});
  const {id} = useParams();
  const token=localStorage.getItem("user_key");
  const userData=localStorage.getItem("user_data");

  const handleSuccess = () => {
    setShowSuccess(true);
  };

  const handleClose = () => {
    setShowSuccess(false);
  };

  let date=new Date().getDate();
if(date<9){
  date=`0${date}`
}
let month=new Date().getMonth()+1;
if(month<9){
  month=`0${month}`
}

let year=new Date().getFullYear();

let todayDate= `${year}-${month}-${date}`





useEffect(()=>{
getMovieDataById(id)
.then(res=>{setMovieData(res.data)})
.catch(err=>console.log(err))
},[render])

  return (
    <>
    {
token && userData ?
<div className=''  style={{height:"150vh"}}>
    <div className=''>

<div className="container my-4 " >

<div className="card">
<div className="card text-bg-dark">
  <img src={movieData.longPoster} className="img" alt="..." style={{opacity:0.5}}/>
  <div className="card-img-overlay">
    <h2 className="card-title" >{movieData.title}</h2>
    <h3  className="card-text">{`${movieData.title} movie is good conpect flim , 
    it's an ${movieData.discription} ,The main role in the is ${movieData.actors}`}</h3>
  </div>
  <p className="card-text"><small>Last updated 3 mins ago</small></p>
</div>

</div>
<div className='m-4 text-start'>
<h5 className='text-white'>Movie Name : {movieData.title}</h5>
<h5 className='text-white'>Release Date : {movieData.releaseDate}</h5>
<h5 className='text-white'>Actors : {`${movieData.actors}`}</h5>
<h5 className='text-white'>Type   : {movieData.discription}</h5>

</div>
<div className='d-flex justify-content-center'>
<div className='card m-2' style={{width:"450px"}}>
  <div className='m-4 '   >
    <h2 className='card-text text-dark' >TICKET BOOKING</h2>
    <br />
    <br />
    {showSuccess && <SuccessPopUp message="MOVIE BOOKED SUCCESSFULLY" onClose={handleClose}  />}

<Formik
      initialValues={{
        number: '',
        date: '',
      }}
      onSubmit={ (values) => {
        if(values.date==""||values.number==""){
          alert("Enter both Field !!!...")
         return;
        }
       
       bookMovieById({movie:movieData._id,...values})
       .catch(err=>console.log(err))
        
       handleSuccess();
        values.date="";
        values.number="";

        
      }}
    >
      <Form>
        <label htmlFor="number" className='card-text text-dark'>SEAT NUMBER :</label>
        <Field id="number" type="number" name="number" placeholder="Enter seat number"  max="100" />
<br />
<br />
        <label htmlFor="date" className='card-text text-dark'>SHOW DATE :</label>
        <Field id="date" type="date" name="date" min={todayDate}  />
<br />
<br />
      
<button type="submit" className="btn btn-warning" id="liveToastBtn" >BOOK NOW</button>

    
      </Form>
    </Formik>
    </div>
</div>
</div>
</div>
</div>
</div>:
<User/>
  }
  </>
    
    )
}

export default MovieBooking