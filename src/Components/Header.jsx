import React, { useContext, useEffect, useState } from 'react';
import { AppBar, Toolbar ,Box, Autocomplete ,TextField, Tabs, Tab} from "@mui/material";
import TheatersIcon from '@mui/icons-material/Theaters';
import { getAllMovies, getUserData } from '../Api_Helper/Api_helper';
import { Link, json, useNavigate } from 'react-router-dom';

const Header = ({active,setActive,render,setRender}) => {


  const navigate =useNavigate();

  const _id = getUserData();

  const usertoken=localStorage.getItem('user_key');

    const [movie ,setmovie]=useState([]);



useEffect(() => {

  getAllMovies().then(data=>{setmovie(data)})
                  .catch((error)=>console.log(error))

}, []);


const handleChange=(e,val)=>{

  movie.map((ele,index)=>{
    if(ele.title === val){
   setRender(!render);

      if(usertoken){

        navigate(`/movies/${ele._id}`);
      }
    }
  })
}




  return (<>
  <nav className="navbar navbar-expand-lg bg-dark  fixed-top position-sticky ">
  <div className="container-fluid p-0">
  
  <Box width={"15%"}>
                    <Link to={"/"}> <TheatersIcon sx={{fontSize:50,color:"white"}} /></Link>
            </Box>
            <Box width={"70%"} margin={"auto"}>
            <Autocomplete
            sx={{bgcolor:"whitesmoke" , borderRadius:"8px"}}
        id="free-solo-demo"
        freeSolo
        onChange={handleChange}
        options={movie&&movie.map((option) => option.title)}
        renderInput={(params) =>
           <TextField sx={{ input:{color:"black",borderBottom:"none",margin:"auto",fontFamily:"Libre Baskerville, serif" },listmenuStyle:{fontFamily:"Libre Baskerville, serif"} , paddingLeft:1,border:'none'}} variant='standard' {...params} placeholder="Search Movies ..." />}
      />
            </Box>
    <button className="navbar-toggler  shadow-none border-0 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="sidebar bg-dark w-75 offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header  border-bottom ">
        <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">
        <TheatersIcon sx={{fontSize:50,color:"white"}}  />

          Side Bar</h5>
        <button type="button " className="btn-close btn-close-white border-0 shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body  d-flex flex-column flex-lg-row p-4 p-lg-0">
      <ul className="navbar-nav justify-content-center  align-items-center fs-5 flex-grow-1 pe-3">
          <li className="nav-item mx-2">
            <Link onClick={()=>setActive("")}  to={"/"} className="nav-link " aria-current="page" href="#home ">Home</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to={"/movies"} className={`nav-link ${active}`} > Movies</Link>
          </li>
          <li className="nav-item mx-2">
            <Link onClick={()=>setActive("")}  to={"/admin"} className="nav-link"  >Admin</Link>
          </li>
          <li className="nav-item mx-2">
            <Link onClick={()=>setActive("")}  to={"/userLogin"} className="nav-link"  >User</Link>
          </li>
        </ul>
        <div className='d-flex m-1 justify-content-center align-items-center flex-column flex-lg-row gap-3'>

    {usertoken&&<Link to={`/booking/${_id}`} className='nav-link text-white' > Bookings   </Link>}

        </div>

      </div>
    </div>
  </div>
</nav>
    </>
   
  
    )
}

export default Header