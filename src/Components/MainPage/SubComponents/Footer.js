import React from 'react'

const Footer = () => {
  return (
    <section className='footer'>
        <div className='box-container'>
            <div className='box'>
            <h3>EXPLORE</h3>
            <a href='/'><i className='fas fa-arrow-right'></i> Home</a>
            <a href='/student'><i className='fas fa-arrow-right'></i> Student</a>
            <a href='/teacher'><i className='fas fa-arrow-right'></i> Teacher</a>
            <a href='/about'><i className='fas fa-arrow-right'></i> About</a>
            </div>
        <div className='box'>
            <h3>Branches</h3>
            <a href='/'><i className='fas fa-arrow-right'></i> Computer Science</a>
            <a href='/student'><i className='fas fa-arrow-right'></i> Electronics Engineering</a>
            <a href='/teacher'><i className='fas fa-arrow-right'></i> Mechanical Engineering</a>
            <a href='/about'><i className='fas fa-arrow-right'></i> Artificial Intelligence and Data Science</a>
            <a href='#'><i className='fas fa-arrow-right'></i> Production Engineering</a>
            <a href='#'><i className='fas fa-arrow-right'></i> Instrumation Engineering</a>
            </div>
        <div className='box'>
            <h3>Quick Links</h3>
            <a href='/'><i className='fas fa-arrow-right'></i> My Account</a>
            <a href='/student'><i className='fas fa-arrow-right'></i> Feedback</a>
            <a href='/teacher'><i className='fas fa-arrow-right'></i> Help Center</a>
            <a href='/about'><i className='fas fa-arrow-right'></i> Certificates</a>
            <a href='#'><i className='fas fa-arrow-right'></i> Newsletter</a>
            </div>
        <div class="box">
            <h3>follow us</h3>
            <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
            <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
            <a href="#"> <i class="fab fa-linkedin"></i> linkedin </a>  
            <a href="#"> <i class="fab fa-github"></i> github </a>
        </div>
        </div>
    </section>
  )
}

export default Footer