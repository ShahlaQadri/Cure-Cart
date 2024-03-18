import React from 'react'
import Herosection from '../Components/Herosection'
import Deals from '../Components/Deals';
import Prescription from '../Components/Prescription'

function Homepage () {
  return (
    <div>
      <Herosection/>
      <Deals/>
      <Prescription/>
    </div>
  )
}
export default Homepage;