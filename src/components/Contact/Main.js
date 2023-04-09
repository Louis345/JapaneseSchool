import React from 'react'
import Bredcom from '../Bredcom/Main'
import Get from '../Mencontact/Get'
import Map from '../Mencontact/Map'

function Main() {
  return (
    <>
        <Bredcom
         title="Contact Us" 
         subtitle="Home"
         subtitledown="Contact Us"
         />
        <Get/>
        <Map/>
    </>
  )
}

export default Main