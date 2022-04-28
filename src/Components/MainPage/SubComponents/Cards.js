import React from 'react'

const Cards = () => {
  return (
    <section className='category'>
        {/* <h1 className='heading'>Our Branches</h1> */}
        <a href="#" className='box'>
            <img src='images/comp.svg'/>
            <h3>Computer Science</h3>
        </a>
        <a href='#' className='box'>
            <img src='images/entc.svg'/>
            <h3>Electronics Engineering</h3>
        </a>
        <a href='#' className='box'>
            <img src='images/mech.svg'/>
            <h3>Mechanical  Engineering</h3>
        </a>
        <a href='#' className='box'>
            <img src='images/aids.svg'/>
            <h3>Data Science and Artificial Intelligence</h3>
        </a>
        <a href='#' className='box'>
            <img src='images/prod.svg'/>
            <h3>Production Engineering</h3>
        </a>
        <a href='#' className='box'>
            <img src='images/chem.svg'/>
            <h3>Chemical Engineering</h3>
        </a>   
        <a href='#' className='box'>
            <img src='images/instru.svg'/>
            <h3>Instrumation Engineering</h3>
        </a>
    </section>
  )
}

export default Cards