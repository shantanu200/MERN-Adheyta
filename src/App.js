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
function App() {
  return (
    <Routes>
      <Route path='/about' element={<About />}></Route>
      <Route path="/e" element={<Main/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path='/tutorial' element={<Tut/>}></Route>
      <Route path='/teacher' element={<Teacher />}></Route>
      <Route path='/student' element={<Student />}></Route>
      <Route path='/' element={<NewPage />}></Route>
    </Routes>
  );
}

export default App;
