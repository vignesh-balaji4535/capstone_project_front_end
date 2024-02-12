import {
  Box,
  Button,
  Checkbox,
  FormLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { addMovie } from "../../Api_Helper/Api_helper";
import SuccessPopUp from "../../Pop_ups/Success_pop_up";
const labelProps = {
  mt: 1,
  mb: 1,
};

const AdminCreateMovie = () => {

  const [showSuccess, setShowSuccess] = useState(false);
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    posterUrl: "",
    longPoster:"",
    releaseDate: "",
    featured: false,
  });
  const [actors, setActors] = useState([]);
  const [actor, setActor] = useState("");

  const handleSuccess = () => {
    setShowSuccess(true);
  };

  const handleClose = () => {
    setShowSuccess(false);
  };


  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputs, actors);
    if(inputs.featured==""&&inputs.description==""&&inputs.longPoster==""&&inputs.releaseDate==""&&inputs.posterUrl==""&&inputs.title==""&&actors.length==0){
     
      alert("FIll ALL THE DEATAILS FO THE MOVIE !!!")
    }else{
      addMovie({ ...inputs, actors })
      .then((res) =>{alert("MOVIE CREATED SUCCESSFULLY !!!"); handleSuccess()})
      .catch((err) => console.log(err));

     
    }
    inputs.description="";
    inputs.featured=false;
    inputs.longPoster="";
    inputs.posterUrl="";
    inputs.title="";
    inputs.releaseDate="";
    setActors([]);

  };
  return (

<div className="container " style={{height:"140vh"}}>

<div className='m-5 text-center text-white' >
<h2>CREATE NEW MOVIE</h2>


</div>
<form onSubmit={handleSubmit} className=" text-start" style={{backgroundColor:"white"}}>
        <Box
          width={"50%"}
          padding={10}
          margin="auto"
          display={"flex"}
          flexDirection="column"
          boxShadow={"10px 10px 20px #ccc"}
        >
         
          <FormLabel sx={labelProps}>Title</FormLabel>
          <TextField
            value={inputs.title}
            onChange={handleChange}
            name="title"
            variant="standard"
            margin="normal"
          />
          <FormLabel sx={labelProps}>Description</FormLabel>
          <TextField
            value={inputs.description}
            onChange={handleChange}
            name="description"
            variant="standard"
            margin="normal"
          />
          <FormLabel sx={labelProps}>Poster URL</FormLabel>
          <TextField
            value={inputs.posterUrl}
            onChange={handleChange}
            name="posterUrl"
            variant="standard"
            margin="normal"
          />
          
          <FormLabel sx={labelProps}>Release Date</FormLabel>
          <TextField
            type={"date"}
            value={inputs.releaseDate}
            onChange={handleChange}
            name="releaseDate"
            variant="standard"
            margin="normal"
          />
          <FormLabel sx={labelProps}>Actor</FormLabel>
          <Box display={"flex"}>
            <TextField
              value={actor}
              name="actor"
              onChange={(e) => setActor(e.target.value)}
              variant="standard"
              margin="normal"
            />

            <Button
              onClick={() => {
                setActors([...actors, actor]);
                setActor("");
              }}
            >
              Add
            </Button>
          </Box>
          <FormLabel sx={labelProps}>Long Poster URL</FormLabel>
          <TextField
            value={inputs.longPoster}
            onChange={handleChange}
            rows={10}
            maxRows={Infinity}
            name="longPoster"
            variant="standard"
            margin="normal"
          />
          <FormLabel sx={labelProps}>Featured</FormLabel>
          <Checkbox
            name="fetaured"
            checked={inputs.featured}
            onClick={(e) =>
              setInputs((prevSate) => ({
                ...prevSate,
                featured: e.target.checked,
              }))
            }
            sx={{ mr: "auto" }}
          />
          <br />
    {showSuccess && <SuccessPopUp message="MOVIE CREATED SUCCESSFULLY" onClose={handleClose}  />}
<br />
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "30%",
              margin: "auto",
              bgcolor: "#2b2d42",
              ":hover": {
                bgcolor: "#121217",
              },
            }}
          >
            Add New Movie
          </Button>
        </Box>
      </form>
</div>    )
}

export default AdminCreateMovie