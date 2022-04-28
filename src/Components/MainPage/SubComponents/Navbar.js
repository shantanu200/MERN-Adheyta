import React,{Component, useState} from 'react'
import '../Style.css'

class Navbar extends Component{
  state = {clicked:false};

  handleClick = () => {
    this.setState({clicked : !this.state.clicked});
    console.log(this.state.clicked);
  }

  render(){
    return(
        
        <header className='header'>
        <a href='/' className='logo'><i className='fas fa-graduation-cap'></i> Adheyta</a>
        <div className='fas fa-bars' onClick={this.handleClick}></div>
    
        <nav className="navbar">
            <ul className='nav-ul'>
            <li><a href='/'>Home</a></li>
            <li><a href='/student'>Student</a></li>
            <li><a href='/teacher'>Teacher</a></li>
            <li><a href='/about'>About</a></li>
            <li><a><i class="fa-solid fa-user-check"></i></a></li> 
          </ul>
        </nav>
        </header>
      )
  }
}

export default Navbar;