import React, { useState } from 'react';
import { Formik } from 'formik';
import { useNavigate,Link } from 'react-router-dom';
import axios from "axios"


const Admin_from = ({setRender,render}) => {
    const [sipnner,setSpinner]=useState(false)
    const [err,setErr]=useState('')
    const [errpass,setErrpass]=useState('')  
    const navigate=useNavigate()


  return (
    <div>
            <h4 style={{fontFamily:"serif"}}>ADMIN LOGIN PAGE</h4>
    <br />
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if(!values.password){
          errors.password="Required"
        }
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={ async(values, { setSubmitting }) => {
        setSpinner(true);
          setSubmitting(false);
      
       try {
        let response =await axios.post("https://capstone-back-end-server.onrender.com/Api/admin/login",values)
         
        console.log(response.data.Admintoken)
        console.log(response.data.admin)
        setRender(!render)
        localStorage.setItem('admin_key',response.data.Admintoken);
        localStorage.setItem("admin_data",JSON.stringify({adminName:response.data.admin.adminName,_id:response.data.admin._id}))

      
        
        // if(response.data.Admintoken){
        //   navigate("/admin_access")

        // }

      } catch (error) {
        console.log(error.response.data)
        setSpinner(false);

        if(error.response.status===404){
          setErr(error.response.data)
        }else if(error.response.status===400){
          setErrpass(error.response.data)

        }

     
      }
          
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
          className='input'
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            autoComplete='email'
            placeholder='Enter your E-mail'
            
          />
          <p style={{color:"red",fontSize:"12px"}}>{errors.email && touched.email && errors.email}{err}</p>
           
          <input
          className='input'
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            autoComplete='current-password'
            placeholder='Password'

          />
          <p style={{color:"red",fontSize:"12px"}}>{errors.password && touched.password && errors.password}{errpass}</p>
         

          <br />
          <button className='btn btn-primary' type="submit" disabled={isSubmitting} >
            Login {sipnner&&<div className="spinner-border text-light mx-2 " role="status"  style={{width:"20px",height:"20px"}}>
  <span className="visually-hidden">Loading...</span>
</div>}
          </button>
        </form>
      )}
    </Formik>
    </div>
  )
}

export default Admin_from