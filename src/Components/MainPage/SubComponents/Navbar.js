import React,{useState} from 'react'
import '../Style.css'

const NewPage = () => {
  const [user,setUser] = useState({
    status: false
  });

  
  const [state,setState] = useState({
    clicked : false
  });

  const handleChange = () => {
    setState({clicked:!state.clicked});
  }
  return (
    <header className='header'>
    <a href='/' className='logo'><i className='fas fa-graduation-cap'></i> Adheyta</a>
    <div id="menu-btn" className='fas fa-bars'></div>

    <nav className='navbar'>
        <ul className='nav-ul'>
        <li><a href='/'>Home</a></li>
        <li><a href='/student'>Student</a></li>
        <li><a href='/teacher'>Teacher</a></li>
        <li><a href='/about'>About</a></li>
        <li><a><i class={user.status ? "fa-solid fa-user-check" : "fa-solid fa-user"}></i></a></li> 
      </ul>
    </nav>
    </header>
  )
}

export default NewPage;