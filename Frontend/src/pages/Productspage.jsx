import React from 'react'
import Productcard from '../Components/Productcard'

export default function Productspage() {
  return (
    <div className='mx-10 rounded-lg' >
        <div className="category bg-blue-100 my-10 rounded-lg">
            <p className='text-4xl pb-[8rem] pl-6 pt-6'>Skin Care</p>
        </div>

        <div className="all-products grid grid-cols-5 gap-10 py-10 mb-5 mx-2 relative">
            <div className='absolute ml-2 pt-1'>
            <p className='text-gray-400 font-semibold'>ALL PRODUCTS</p></div>
            <Productcard img={"../../pictures/div4.png"} name={"Vicks VapoRub"}/>
            <Productcard img={"../../pictures/div2.png"} name={"Cetaphil Facewash"} />
            <Productcard img={"../../pictures/div3.png"} name={"Revital Women"} />
            <Productcard img={"../../pictures/div1.png"} name={"HK Vitals"} />
            <Productcard img={"../../pictures/div5.png"} name={"Digital BP Machine"} />
            <Productcard img={"../../pictures/div4.png"} name={"Vicks VapoRub"}/>
            <Productcard img={"../../pictures/div2.png"} name={"Cetaphil Facewash"} />
            <Productcard img={"../../pictures/div3.png"} name={"Revital Women"} />
            <Productcard img={"../../pictures/div1.png"} name={"HK Vitals"} />
            <Productcard img={"../../pictures/div5.png"} name={"Digital BP Machine"} />

        </div>
        
      
    </div>
  )
}
