import React from 'react'
import '../Style.css';

const HomeSection = () => {
  return (
    <section className='home'>
        <div className='image'>
            <img src='images/home-img.png' alt=""/>
        </div>

        <div className='content'>
            <h3>Welcome to Adheyta</h3>
            <p>Online Educational Platform</p>
            <a href='/register' className='btn'>Get Started</a>
        </div>
    </section>
  )
}

export default HomeSection