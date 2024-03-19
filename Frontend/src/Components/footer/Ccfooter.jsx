import React from 'react'

export default function Ccfooter() {
  return (
    <div className='outer bg-[#A8DF8E] flex flex-col items-center justify-center mx-20 h-[470px] rounded-3xl'>

        <div className="inner bg-white h-[250px] w-[70%] rounded-3xl">
            <div className="items flex items-center justify-center space-x-16 my-6">
                <ul className='space-y-2'>
                    <li className='pb-3 font-bold'>Company</li>
                    <li>What's New</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>

                <ul className='space-y-2'>
                    <li className='pb-3 font-bold'>Community</li>
                    <li>CureCart for Business</li>
                    <li>Explore Templates</li>
                    <li>Charities</li>
                </ul>

                <ul className='space-y-2'>
                    <li className='pb-3 font-bold'>Support</li>
                    <li>Getting Started</li>
                    <li>FAQs</li>
                    <li>Report a Violation</li>
                </ul>

                <ul className='space-y-2'>
                    <li className='pb-3 font-bold'>Trust & Legal</li>
                    <li>Terms and Conditions</li>
                    <li>Cookie Notice</li>
                    <li>Trust Center</li>
                </ul>
            </div>

        </div>


        <div className="logo bg-white h-[120px] w-[70%] mt-3 rounded-3xl text-center py-3">
            <p className='text-[#A8DF8E] font-extrabold text-5xl'>C U R E</p>
            <p className='text-[#A8DF8E] font-extrabold text-5xl'>C A R T</p>
        </div>
      
    </div>
  )
}
