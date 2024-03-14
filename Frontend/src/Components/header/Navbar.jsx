import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'



export default function Navbar() {
  return (
    <div className='main-container mx-auto'>
        <div className="navbar bg-gray-100 h-[7rem] pt-4">
            <div className="navbar-elements flex space-x-8">

                {/* logo */}
                <div className="logo flex-col items-center px-8 mr-9">
                    <p className='font-bold '>C U R E</p>
                    <p className='font-bold '>C A R T</p>
                </div>

                {/* search bar */}
                <div className="search-bar flex">
                    <div className='relative flex-1 mr-[36rem]'>
                    <input type="text" placeholder='' className='w-[22rem] h-9 rounded-full'/>
                <div className="search bg-black text-white h-9 w-[6rem] rounded-full absolute right-0 bottom-0 mb-3 flex items-center justify-center">
                    <p className='pr-2'>Search</p> 
                    <FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                </div>
                </div>

                {/* icons */}
                <div className="icons flex space-x-7">
                    <div className="wishlist rounded-full w-10 h-10 bg-white flex items-center justify-center hover:bg-slate-50"><FontAwesomeIcon icon={faHeart} className='text-2xl' /></div>
                    <div className="cart  rounded-full w-10 h-10 bg-white flex items-center justify-center hover:bg-slate-50"><FontAwesomeIcon icon={faCartShopping} className='text-2xl' /></div>
                    <div className="profile  rounded-full w-10 h-10 bg-white flex items-center justify-center hover:bg-slate-50"><FontAwesomeIcon icon={faUser} className='text-2xl'/></div>
                </div>
                </div>

                {/* categories */}
                <div className="flex space-x-16 mt-2">
                    <div className='px-4 py-2 mt-[0.15rem] font-serif'>CATEGORIES</div>
                    <a href="#" className="medicines h-8 px-4 py-2 text black rounded-full bg-white border shadow-lg hover:bg-slate-50">Medicines</a>
                    <a href="#" className="skincare h-8 px-4 py-2 text black rounded-full bg-white border shadow-lg hover:bg-slate-50">Skincare</a>
                    <a href="#" className="babycare h-8 px-4 py-2 text black rounded-full bg-white border shadow-lg hover:bg-slate-50">Baby Care</a>
                    <a href="#" className="babycare h-8 px-4 py-2 text black rounded-full bg-white border shadow-lg hover:bg-slate-50">Diabetes Care</a>
                    <a href="#" className="electronics h-8 px-4 py-2 text black rounded-full bg-white border shadow-lg hover:bg-slate-50">Electronics</a>
                </div>

        </div>
    </div>
  )
}
