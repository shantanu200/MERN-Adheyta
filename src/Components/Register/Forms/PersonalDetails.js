import React from "react";
import validator from "validator";
import Swal from "sweetalert2";
import "../Register.css";
import PasswordValidator from "password-validator";

const PersonalDetails = ({nextStep,handleFormData,value}) => {
  const schema = new PasswordValidator();
  schema
   .is().min(8)
   .is().max(100)
   .has().uppercase()
   .has().lowercase()
   .has().digits(1)
   .has().not().spaces();

  const submitForm = (e) => {
    e.preventDefault();
    console.log(value);
    
    if(validator.isEmpty(value.firstname) || validator.isEmpty(value.lastname) || validator.isEmpty(value.email) || validator.isEmpty(value.username) || validator.isEmpty(value.password)){
      Swal.fire({
        title: 'Error!',
        text: 'All Fields are required',
        icon: 'error',
        confirmButtonText: 'Next'
      });
    }
    else{
      if(schema.validate(value.password)){
        Swal.fire({
          title: 'Success!!',
          text: 'Please Fill College Details',
          icon: 'success',
          confirmButtonText: 'Next'
        });
        nextStep();
      }
      else{
        Swal.fire("Password Error");
      }
    }
  }
  return (
    <>
    <div className="rRight">
      <div className="rPTittle">
        <h1>Personal Details</h1>
      </div>
      <div className="rPForm">
        <form onSubmit={submitForm}>
          <input type="text" name="firstname" defaultValue={value.firstname}  placeholder="Enter Your First Name" onChange={handleFormData("firstname")}  />
          <input type="text" name="lastname" defaultValue={value.lastname}  placeholder="Enter Your Last Name" onChange={handleFormData("lastname")}/>
          <input type="email" name="email" defaultValue={value.email}  placeholder="Enter College Email Here"  onChange={handleFormData("email")}/>
          <input type="text" name="username" defaulValue={value.username} placeholder="Enter Unique Username here"  onChange={handleFormData("username")}/>
          <input type="password" name="password" defaultValue={value.password} placeholder="Enter Password Here" onChange={handleFormData("password")}/>
          <button type="submit">
            <i class="fa-solid fa-arrow-right-long"></i> Next Step
          </button>
        </form>
      </div>
      <div className="rPFooter">
        <h4>
          Existing User ?<a href="/login"> Login Here</a>
        </h4>
      </div>
      </div>
      </>
  );
};

export default PersonalDetails;
