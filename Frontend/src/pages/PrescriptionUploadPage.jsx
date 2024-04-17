import React, { useState } from 'react';
import { FaFileUpload } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";

const PrescriptionUploadPage = () => {
  const [prescriptionImage, setPrescriptionImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPrescriptionImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='flex mx-28 my-10 '>
      <div className="content w-[50%]">
        <div className='space-y-1'>
          <p className='text-xl font-bold'>Do you have a prescription for your medicine?</p>
          <p className='text-lg '>Just upload it and we will arrange the medicines for you.</p>
        </div>

        <div className="upload flex gap-4 pt-6">
          <div className="border border-gray-300 rounded p-4 mb-4 mr-2 flex items-center w-[35%] bg-blue-100">
            <label htmlFor="upload-prescription" className="cursor-pointer">
              <input type="file" id="upload-prescription" className="hidden" onChange={handleFileChange} />
              <div className='flex justify-center items-center mt-6'>
              <FaFileUpload className='text-3xl text-blue-500 ml-2' />
              </div>
              <div className='mt-2 ml-3'>
                <p className="text-lg text-blue-500">Upload Prescription</p>
              </div>
              
            </label>
          </div>

          <div className="border border-gray-300 rounded p-4 mb-4 mr-2 flex items-center w-[35%] bg-blue-100">
            <label htmlFor="upload-prescription" className="cursor-pointer">
              <input type="file" id="upload-prescription" className="hidden" onChange={handleFileChange} />
              <div className='flex justify-center items-center mt-6'>
              <GrGallery className='text-3xl text-blue-500 ml-4' />
              </div>
              <div className='mt-2 ml-5 '>
                <p className="text-lg text-blue-500">Past Prescription</p>
              </div>
              

              
            </label>
          </div>
        </div>
        <div class="border-4 border-gray-300 my-6"></div>

        {prescriptionImage && (
          <div className="prescription-preview my-4">
            <img src={prescriptionImage} alt="Prescription Preview" className="h-[150px] rounded" />
          </div>
        )}

        <div className="confirm flex border border-gray-300 rounded py-1 ">
          <img className="h-24 w-24" src="pictures/presuser.jpg" alt="" />
          <div className='mt-4 ml-4 '>
            <p className='text-lg text-zinc-600'>Our pharmacist will call to confirm the medicines in your</p>
            <p className='text-lg text-zinc-600'>prescription.</p>
          </div>
        </div>
      </div>

      <div className="proceed w-[50%]">
        <div className='flex justify-center items-center'>
          <img className="h-[320px]" src="pictures/proceed.jpg" alt="" />
        </div>
        <div className='flex justify-center items-center'>
          <button className='bg-blue-500 px-16 py-2 text-xl text-white rounded-lg'>Proceed</button>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionUploadPage;
