import React, { useEffect, useState } from 'react'
import MovieCards from './MovieCards.jsx'
import { getAllMovies } from '../../Api_Helper/Api_helper.jsx';

const Movie = () => {

  const [movies,setMovies]=useState([]);

  useEffect(()=>{
    getAllMovies().then(res=>{setMovies(res)}).catch(err=>console.log(err))
  },[])

  return (
    <div className="container-fluid ">
    <div className="p-2 text-white d-flex justify-content-center" >
    <h3 className='p-1 rounded-2 border-3 border border-info' style={{backgroundColor:"rgb(190, 189, 189)"
  ,color:"rgb(12, 12, 24)",width:"400px",fontFamily:"Libre Baskerville, serif"}}>All Movies</h3>

    </div>

    <div className="container">
       <div className="row ">
       
       {movies.length==0&& 
        <div className="container text-center">
        <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      </div>}
       { movies&&movies.map((itm,ind)=><MovieCards key={ind} {...itm}/>)}

        </div>
        </div>
        </div>

  )
}

export default Movie