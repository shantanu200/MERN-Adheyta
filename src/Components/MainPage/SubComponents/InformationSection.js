import React from 'react'

const InformationSection = () => {
  return (
       <section className='home'>
        <div className='content'>
            <h3>Welcome to Adheyta</h3>
            <p>Online Educational Platform</p>
            <a href='/register' className='btn'>Get Started</a>
        </div>
        <div className='image'>
            <img src='images/section2.svg' alt=""/>
        </div>
    </section>
  )
}

export default InformationSection