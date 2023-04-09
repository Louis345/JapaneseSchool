import React from 'react'
import Bredcom from '../Bredcom/Main'
import First from '../MenSerivcesdetails/First'
import Test from '../../components/Menhome/Testimonial'

function Main() {
  return (
    <>
      <Bredcom
      title="Serivces Details" 
      subtitle="Home"
      subtitledown="Pricing"  />

      <First/>
      <Test/>  

    </>
  )
}

export default Main