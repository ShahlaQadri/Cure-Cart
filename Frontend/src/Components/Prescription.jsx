import React from 'react'

export default function Prescription() {
  return (
    <div className='grid grid-cols-2 gap-8 py-2 mx-12'>
        <div className="prescription bg-yellow-400 h-[280px] w-[50] flex flex-col items-center justify-center rounded-2xl">
                <div className="img-con h-[180px] w-[80%] bg-white rounded-2xl mb-6">
                    <p className='w-1/2 font-bold text-2xl mx-4 my-4'>Upload prescription to place order</p>
                    <p className='mx-4'>Upload only .jpg .png or .pdf files</p>
                    <p className='mx-4'>Size limit is 15 MB</p>
                </div>

            <div className="button bg-black text-white p-2 rounded-lg text-sm">
                <button className=''>Order Via Prescription</button>
                </div>
        </div>


        <div className="discount bg-green-500 flex flex-col items-center justify-center rounded-2xl">
        <div className="img-con h-[180px] w-[80%] bg-white rounded-2xl mb-6">
                    <p className='w-1/2 font-bold text-2xl mx-4 my-4'>Upload prescription to place order</p>
                    <p className='mx-4'>Upload only .jpg .png or .pdf files</p>
                    <p className='mx-4'>Size limit is 15 MB</p>
        </div>
        
        <div className="button bg-black text-white p-2 rounded-lg text-sm">
                <button className=''>Order Via Prescription</button>
                </div>

        </div>
      
    </div>
  )
}
