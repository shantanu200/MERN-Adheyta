import React from 'react'

const Cards = () => {
  return (
    <section className='category'>
        {/* <h1 className='heading'>Our Branches</h1> */}
        <a href="#" className='box'>
            <img src='images/category-1.png'/>
            <h3>Computer Science</h3>
        </a>
        <a href='#' className='box'>
            <img src='images/category-2.png'/>
            <h3>Electronics Engineering</h3>
        </a>
        <a href='#' className='box'>
            <img src='images/category-3.png'/>
            <h3>Mechanical  Engineering</h3>
        </a>
        <a href='#' className='box'>
            <img src='images/category-4.png'/>
            <h3>Data Science and Artificial Intelligence</h3>
        </a>
        <a href='#' className='box'>
            <img src='images/category-5.png'/>
            <h3>Production Engineering</h3>
        </a>
        <a href='#' className='box'>
            <img src='images/category-3.png'/>
            <h3>Chemical Engineering</h3>
        </a>   
        <a href='#' className='box'>
            <img src='images/category-4.png'/>
            <h3>Instrumation Engineering</h3>
        </a>
    </section>
  )
}

export default Cards