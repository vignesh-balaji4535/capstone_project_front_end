import React, { useEffect, useState } from 'react'
import salaar from "../images/salaar poster.jpg"
import leo from "../images/Leo poster.jpg";
import Fir from "../images/Fir poster.jpg";
import maanaadu from "../images/Maanaadu poster.gif";
import por from "../images/por thozhil poster.jpg";
import { getAllMovies } from '../Api_Helper/Api_helper';
import Slider_img_card from '../Slider_img_card';


const Slider = ({movie}) => {

  // useEffect(() => {
  //   getAllMovies().then(data=>{console.log(data),setmovie(data)})
  //                   .catch((error)=>console.log(error))
  
  // }, [])

  return (

<div className="container-fluid py-3" style={{background:"rgb(235,235,235)"}} >
<div id="carouselExampleControlsNoTouching " className="carousel slide " data-bs-touch="false" data-bs-ride="carousel">
  <div className="carousel-inner w-100">
    {
      movie&&movie.map((ele,ind)=><Slider_img_card key={ind} {...ele}/>)
    }
     <div className="carousel-item active " data-bs-interval="5000">
      <img src={leo} className="d-block w-100 rounded-4"  />
    </div>
    <div className="carousel-item" data-bs-interval="5000">
      <img src={salaar} className="d-block w-100 rounded-4"  />
    </div>
    <div className="carousel-item" data-bs-interval="5000">
      <img src={Fir} className="d-block w-100 rounded-4"  />
    </div>
    
    <div className="carousel-item" data-bs-interval="5000">
      <img src={maanaadu} className="d-block w-100 rounded-4"  />
    </div>
    <div className="carousel-item" data-bs-interval="5000">
      <img src={por} className="d-block w-100 rounded-4"  />
    </div> 
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>
)}
    


export default Slider