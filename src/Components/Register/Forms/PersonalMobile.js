import React from 'react'
import '../Register.css';
import '../Mobile.css';

const PersonalMobile = ({nextStep,handleFormData,value}) => {
  return (
      <div className='Mobile'>
        <div className="mTittle">
        <h1>Personal Details</h1>
        </div>
        <div className="mForm">
        <form>
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
        <div className="mFooter">
    </div>
    </div>
  )
}

export default PersonalMobile