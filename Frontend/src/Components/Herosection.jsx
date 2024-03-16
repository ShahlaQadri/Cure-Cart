import React from 'react'

function Herosection() {
  return (
    
    <div className="slider flex flex-col-reverse md:flex-row bg-[#f2f2f2]">
    <div className="left flex flex-col justify-center items-center md:items-baseline px-12 py-12 space-y-5 md:ml-16">
        <h1 className="text-2xl font-medium md:text-4xl mx-5">Beat the Diabetes</h1>
        <p className="3/4 mx-4 text-center md:text-center">Get up to 18% OFF on Diabetes Care </p>
        <button className="text-white bg-black px-4 py-2 my-6 font-bold mx-5">Shop Now</button>
    </div>
    <div className="right">
        <img className="w-[32rem] md:w-[36rem] md:mx-8" src="pictures/care6.avif" alt=""/>

    </div>
</div>
      
  )
}
export default Herosection;
