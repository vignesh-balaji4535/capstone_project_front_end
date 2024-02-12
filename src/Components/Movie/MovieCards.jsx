import React from "react";
import { Link } from "react-router-dom";

const MovieCards = ({title,releaseDate,posterUrl,_id,discription}) => {
  
  return (
    
        <div className=" col-lg-3 col-md-6 col-sm-12 my-2 d-flex justify-content-center">
          <div className="card " style={{ width: "14rem" }}>
            <img src={posterUrl} style={{height:"375px"}} className="card-img-top" alt="..." />
            <div className="card-body p-0 m-0">
              <h4 className="card-title p-0 m-0" style={{fontWeight:"500"}}>{title}</h4>
              <p className="card-text-1 p-0 m-0" style={{fontWeight:"500"}}>{discription}</p>
              <p className="card-text-1 p-0 m-0">{new Date(releaseDate).toLocaleString()}</p>

<div>

<Link type="button" to={`/movies/${_id}`}  className="btn btn-info m-2 ">Book Movie</Link>

</div>

              
            </div>
          </div>
        </div>
     
  );
};

export default MovieCards;
