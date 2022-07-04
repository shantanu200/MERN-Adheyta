import React,{useState,useEffect} from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Main from './Components/MainPage/Main';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login'
import Tut from './Components/Tutorials/Tut';
import Teacher from './Components/Teacher/Teacher';
import Student from './Components/Student/Student';
import About from './Components/About/About';
import NewPage from './Components/MainPage/NewPage';


import axios from 'axios';
import Notes from './Components/Student/Notes';
import Home from './Components/BlogData/pages/home/Home';
import Write from './Components/BlogData/pages/write/Write';
import Single from "./Components/BlogData/pages/single/Single";
function App() {
  const [user,setUser] = useState({});
  const [data,setData] = useState([]);
  
  const setCurrentUser = () => {
    const currUser = window.localStorage.getItem("loginuser");
    setUser(JSON.parse(currUser));
    return JSON.parse(currUser);
  }
  useEffect(() => {
    setCurrentUser();
  },{});


  return (
    <Routes>
    
      <Route path='/about' element={<About />}></Route>
      <Route path="/e" element={<Main/>}></Route>
      <Route path='/register' element={user && user._id ? <Home user={user} />:<Register/>}></Route>
      <Route path="/login" element={<Login setUser={setUser}/>}></Route>
      <Route path='/tutorial' element={<Tut/>}></Route>
      <Route path='/teacher' element={<Teacher />}></Route>
      <Route path='/student' element={user && user._id ? <Home user={user}/>:<Login setUser={setUser}/>}></Route>
      <Route path='/student/write' element={user && user._id ? <Write user={user}/> : <Register />}></Route>
      <Route path='/student/notes' element={<Notes user={user}/>}></Route>
      <Route path='/post/:postId' element={<Single  user={user}/>}></Route>
      <Route path='/' element={<NewPage user={user}/>}></Route>
    </Routes>
  );
}

export default App;
