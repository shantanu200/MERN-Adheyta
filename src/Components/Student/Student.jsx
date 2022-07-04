import axios from 'axios';
import React,{useState,useEffect} from 'react'
import "./Student.css"
import { useNavigate } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';

const Student = ({user}) => {
  const navigate = useNavigate();

  
  const [notes,setNotes] = useState({
    username:user.username,
    subject: "",
    topic: "",
    title: "",
    des: ""
  });

  const handleInput = (e) => {
    const {name,value} = e.target;

    setNotes({
      ...notes,
      [name]:value
    });
  }

  const handleForm = () => {
    console.log(notes);

    axios.post("http://localhost:5000/notes/insert",notes)
    .then((res) => {
      console.log(res);
    })
  }
  
  const handlePrev = () => {
    navigate("/student/notes");
  }

  const handleNext = () => {
    navigate("/student/notes");
  }

  const handleLogout = () => {
    window.localStorage.removeItem("loginuser");
    window.location.reload(false);
  }

  return (
    <div className='stud-main'>
     
    <div className='stud-header'>
      <h1>Add Your Notes</h1>
    </div>
    <div className='stud-prev'>
      <button className='stud-prev-btn' onClick={handlePrev}>Read My Previous Notes</button>
      <button className='stud-prev-btn' onClick={handleNext}>Read Notes of Other Person</button>
      <div className='stud-curr-user'>
        <h1>Current User: {user.username} <MdLogout onClick={handleLogout}/></h1>
      </div>
    </div>
    <div className='stud-form'>
      <form className='form-class' onClick={(e) => {e.preventDefault();}}>
        <div className='stud-select'>
        <label>Subject: </label>
        <select name='subject' onChange={handleInput}>
          <option value="Digital System">Digital System</option>
          <option value="Industrial Electronics">Industrial Electronics</option>
          <option value="Data Communication">Data Communication</option>
          <option value="Advance Data Structure">Advance Data Structure</option>
        </select>
        </div>
        <div className='stud-select'>
        <label>Topic: </label>
        <input name='topic' placeholder='Eg.Counter' onChange={handleInput}/>
        </div>
        <div className='stud-select'>
        <label>Title: </label>
        <input name='title' placeholder='Eg. Johnson Counter' onChange={handleInput}/>
        </div>
        <div className='stud-select'>
          <label>Description: </label>
          <textarea name="des" rows={4} cols={100} onChange={handleInput} />
        </div>
        <div className='stud-button'>
          <button type='submit' onClick={handleForm}>Post Notes</button>
        </div>
      </form>
    </div>
    
    </div>
  )
}

export default Student