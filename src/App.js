import './App.css';
import {Routes,Route} from 'react-router-dom';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login'
function App() {
  return (
    <Routes>
      <Route path='/register' element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
  );
}

export default App;
