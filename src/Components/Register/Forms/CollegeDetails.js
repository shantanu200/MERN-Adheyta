import React from 'react'
import '../Register.css';
import validator from "validator";
import Swal from 'sweetalert2';
import axios from 'axios';

const CollegeDetails = ({nextStep,handleFormData,value}) => {
  const checkDiv = (par) => {
    let temp = par.toLowerCase();

    if(temp.charCodeAt(0)>96 && temp.charCodeAt(0)<123){
      return true;
    }
    return false;
  }
  const postData = () => {
    axios.post("http://localhost:5000/register",value)
    .then((res) => {
       console.log(res);
    })
  }
  const submitForm = (e) => {
     e.preventDefault();
     console.log(value);
     
     if(validator.isEmpty(value.division) || validator.isEmpty(value.prn) || validator.isEmpty(value.roll)){
       Swal.fire({
        title: 'Error!',
        text: 'All Fields are required',
        icon: 'error',
        confirmButtonText: 'Next'
       });
     }else{
       if(checkDiv(value.division)){
        Swal.fire({
          title: 'Success',
          text: 'College Details Add Successfully',
          icon: 'success',
          confirmButtonText: 'Next'
         })
         postData();
       }else{
        Swal.fire({
        title: 'Error',
        text: 'Invalid Division Name',
        icon: 'error',
        confirmButtonText: 'Next'
       })
       }
     }
     
  }
  return (
    <div className='rCRight'>
    <div className='rCTittle'>
      <h1>College Details</h1>
    </div>
    <div className='rCForm'>
      <form onSubmit={submitForm}>
        <label> Select Your Branch: </label>
        <select value={value.branch} onChange={handleFormData("branch")}>
          <option>Computer Science</option>
          <option>Electronics and Telecommunication</option>
          <option>Mechanical Engineering</option>
          <option>Data Science and Artificial Intelligence</option>
          <option>Chemical Engineering</option>
          <option>Production Engineering</option>
          <option>Instrumation Engineering</option>
        </select>
        <label>
          Year of Engineering
        </label>
        <select value={value.year} onChange={handleFormData("year")}>
          <option>First Year</option>
          <option>Second Year</option>
          <option>Third Year</option>
          <option>Fourth Year</option>
        </select>
        <input type='text'  placeholder='Enter Your Division' onChange={handleFormData("division")}/>
        <input type='number' placeholder='Enter Your Registration Number' onChange={handleFormData("prn")}/>
        <input type='number' placeholder='Enter Your Class Roll No:'  onChange={handleFormData("roll")}/>
        <button type='submit'><i class="fa-solid fa-arrow-right-long"></i> Next Step</button>
      </form>
    </div>
    </div>
  )
}

export default CollegeDetails