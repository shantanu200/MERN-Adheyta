import React,{useState} from 'react'
import './Login.css'
import Swal from 'sweetalert2';
import login from './images/login.png';
import axios from 'axios';

const Login = () => {
  
  const [formData,setFormData] = useState({
    username:"",
    password:""
  });
  
  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }
  const postData = () => {
    axios.post("http://localhost:5000/login",formData)
    .then((res) => {
      Swal.fire({
        title: res.data.title,
        text: res.data.text,
        icon: res.data.icon,
        confirmButtonText: res.data.confirmButtonText
      })
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    postData();
  }
  return (
    <div className='login'>
    <div className="lBlock">
        <div className="lLeft">
        <div className="lTittle">
          <h1>Sign Up</h1>
        </div>
        <div className="lForm">
        <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Enter Username here" onChange={handleChange}/>
        <input type="password" name="password" placeholder="Enter Password here" onChange={handleChange}/>
        <button type="submit" ><i class="fa-solid fa-arrow-right-to-bracket"></i> SIGN UP</button> 
        </form> 
        </div>
        <div className="lFooter">
          <h4>New User ?<a href="/register"> Register Here</a></h4>
        </div>
        </div>
        <div className="lRight">
            <img src={login} />
        </div>
    </div>
    </div>
  )
}

export default Login