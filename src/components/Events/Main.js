import React from 'react'
import Bredcom from '../Bredcom/Main'
import Upcoming from '../MenEvents/Upcoming'

function Main() {
  return (
    <>
        <Bredcom
         title="Events" 
         subtitle="Home"
         subtitledown="Events"
         />
        <Upcoming/>
    </>
  )
}

export default Main