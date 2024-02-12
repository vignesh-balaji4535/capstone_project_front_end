import Slider from './Slider'
import MovieCards from './Movie/MovieCards'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { getAllMovies } from '../Api_Helper/Api_helper';

const HomePage = ({active,setActive}) => {
  const [movies,setMovies]=useState([]);

  useEffect(()=>{
    getAllMovies().then(res=>{setMovies(res)}).catch(err=>console.log(err))
  },[])

  return (
    <>
    <div className='m-auto mx-0 my-2  p-0 ' style={{margin:"7px"}}>
        <Slider movie={movies}/>
        <div className="container-fluid ">
    <div className="p-2 d-flex text-white justify-content-start">
    <h3>Recommended Movies</h3>
    

    </div>

    <div className="container text-center">
       <div className="row ">
        {movies.length==0&& 
        <div className="container text-center">
        <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      </div>}
        {movies&&movies.slice(0,4).map((itm,ind)=><MovieCards key={ind} {...itm}/>)}
        </div>
        </div>

        <div className=' d-flex justify-content-center m-4' >
        <Link to={"/movies"} onClick={()=>setActive("active")} type="button " style={{width:"250px"}} className="btn btn-outline-primary">View All Movies</Link>
        </div>
        
        <br /><br />
        </div>

        </div>
    </>
  )
}

export default HomePage