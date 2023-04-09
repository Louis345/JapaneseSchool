import React from 'react'
import About from '../Menhome/About'
import Bredcom from '../Bredcom/Main' 
import Watch from '../Menhome/Watch'
import Blog from '../Menhome/Blog'
import Testimonial from '../Menhome/Testimonial'
import Teem from '../Menabout/Teem'


function Main() {
  return (
    <>
       <Bredcom
         subtitle="Home"
         title="About Us"
         subtitledown="About"
         />
        <About/>
        <Watch/>
        <Teem/>
        <Testimonial/>
        <Blog/>
    </>
  )
}

export default Main