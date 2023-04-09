import React from 'react'
import About from '../Menhome/About'
import Blog from '../Menhome/Blog'
import Courses from '../Menhome/Courses'
import Events from '../Menhome/Events'
import Services from '../Menhome/Services'
import Slider from '../Menhome/Slider'
import Testimonial from '../Menhome/Testimonial'
import Watch from '../Menhome/Watch'

function Main() {
  return (
    <>
         <Slider/>
         <About/>
         <Watch/>
         <Services/>
         <Courses/>
         <Events/>
         <Testimonial/>
         <Blog/>
    </>
  )
}

export default Main