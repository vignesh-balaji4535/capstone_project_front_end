 import axios from "axios";
import { number, object } from "yup";


 export const getAllMovies = async ()=>{

  const response = await axios.get("https://capstone-back-end-server.onrender.com/api/movie/")
                    .catch((err)=>console.log(err))

                     

    const data = await response.data;
    return data;
 }

 
 // movie data by movie id ; 

 export const getMovieDataById = async (id)=>{

   const response = await  axios.get(`https://capstone-back-end-server.onrender.com/api/movie/${id}`)
                    .catch((err)=>console.log(err))
                     

    return  response;
 }

// movie booking by seat number and date ;

export const bookMovieById = async (data)=>{
const user_data=JSON.parse(localStorage.getItem('user_data'))
  const response =await axios.post('https://capstone-back-end-server.onrender.com/api/booking/seatbooking',
  {
    movie:data.movie,
    date:data.date,
    seatNumber:data.number,
    user:user_data._id,
  })
  .catch(err=>console.log(err))

  if(response.status !==200 ){
    console.log("unexpceted error")
  }
const resdata=await response.data;

return resdata;

}

export const AllBookingOfUser = async (id)=>{

  const response = await axios.get(`https://capstone-back-end-server.onrender.com/api/user/bookings/${id}`)
  .catch(err=>console.log(err))

  if(response.status !==200){
    console.log("unexpceted error")
  }
const resdata=await response.data;

return resdata;

}

export const deleteBookins = async (id) => {

  const response = await axios.delete(`https://capstone-back-end-server.onrender.com/api/booking/delete/${id}`)
  .catch(err=>console.log(err))

  if(response.status !==200){
    console.log("unexpceted error")
  }

return response;


}

/// create new movie

export const addMovie = async (data) => {

  
  const res = await axios
    .post(
      "https://capstone-back-end-server.onrender.com/api/movie/create",
      {
        title: data.title,
        discription: data.description,
        releaseDate: data.releaseDate,
        posterUrl: data.posterUrl,
        longPoster:data.longPoster,
        featured: data.fetaured,
        actors: data.actors,
        admin: localStorage.getItem("adminId"),
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("admin_key")}`,
        },
      }
    )
    .catch((err) => console.log(err));

  if (res.status !== 201) {
    return console.log("Unexpected Error Occurred");
  }

  const resData = await res.data;
  return resData;
};
export const getUserData = ( )=>{
 
  const userData=localStorage.getItem('user_data');
 if(userData){
  const {_id}=JSON.parse(userData);

  return _id;
 }
  



}