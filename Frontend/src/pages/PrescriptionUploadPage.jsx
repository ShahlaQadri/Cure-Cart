import React, { useState } from 'react';
import { IoImages } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { FcAddImage } from "react-icons/fc";
import AddressFormForPresciption from '../Components/AddressFormForPresciption';

const PrescriptionUploadPage = () => {
  const [prescriptionImage, setPrescriptionImage] = useState(null);
  const [visibleForm, setVisibleForm] = useState(false);
  const [photoPrev, setPhotoPrev] = useState("");
  

  const handleFileChange = (e) => { 
    const file = e.target.files?.[0];

    const reader= new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setPhotoPrev(reader.result);
          setPrescriptionImage(file);
        }
      };
    }
  };
  
  const removeHandler = () => {
    setPrescriptionImage(null);
    setPhotoPrev(null)
  };
  // console.log(prescriptionImage)

  return (
    <div className="">
      <div className="relative flex flex-col md:flex-row w-[80%] gap-16 md:gap-20 mx-auto my-8">
        <div className="content md:w-[60%] w-full">
          <div className="space-y-1">
            <p className="text-xl font-extrabold text-zinc-600 tracking-tighter md:mt-0 mt-6">
              Do you have a prescription for your medicine?
            </p>
            <p className="text-md text-zinc-700">
              Just upload it and we will arrange the medicines for you.
            </p>
          </div>

          <div className="upload flex gap-4 pt-10 md:pt-6">
            <div className="border border-blue-600 rounded-lg p-4 mb-2 mr-2 flex items-center justify-center md:w-[35%] w-[50%] bg-[#EAF7FF] md:h-[120px] h-[100px]">
              <label htmlFor="upload-prescription" className="cursor-pointer">
                <input
                  type="file"
                  id="upload-prescription"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <div className="flex flex-col gap-2 justify-center items-center">
                  <FcAddImage className="text-3xl text-blue-500" />
                  <p className="text-sm font-semibold text-blue-500">Upload Prescription</p>
                </div>
              </label>
            </div>

            <div className="border border-blue-600 rounded-lg p-4 mb-2 mr-2 flex items-center justify-center w-[50%] md:w-[35%] bg-[#EAF7FF] md:h-[120px] h-[100px]">
              <label htmlFor="upload-prescription" className="cursor-pointer">
                <input
                  type="file"
                  id="upload-prescription"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <div className="flex flex-col gap-2 justify-center items-center">
                  <IoImages className="text-2xl text-[#8CBCD6]" />
                  <p className="text-sm font-semibold text-blue-500">Past Prescription</p>
                </div>
              </label>
            </div>
          </div>
          <div className="border-4 rounded-full border-gray-300 my-6"></div>

          {photoPrev && (
            <div>
              <p className="font-bold">Uploaded prescription</p>
              <div className="relative prescription-preview my-6 w-auto rounded-lg">
                <button
                  onClick={removeHandler}
                  className="absolute -top-2 left-[100px] text-[#8CBCD6] rounded-full"
                >
                  <MdCancel className="text-2xl bg-white rounded-full" />
                </button>
                <img
                  src={photoPrev}
                  alt="Prescription Preview"
                  className="h-[120px] w-[120px] rounded border-2"
                />
              </div>
            </div>
          )}

          <div className="confirm flex items-center border border-gray-300 rounded-lg py-1">
            <img className="h-20 w-20 md:h-24 md:w-24" src="pictures/presuser.jpg" alt="" />
            <div className="ml-4">
              <p className="text-md text-zinc-600 md:w-[460px] w-[200px]">
                Our pharmacist will call to confirm the medicines in your prescription.
              </p>
            </div>
          </div>
        </div>

       
          <div className="proceed md:w-[40%] w-full">
            <div className="flex justify-center items-center">
              <img
                className="md:h-[300px] h-[200px]"
                src="../../pictures/RX prescription flat vector illustration.jpg"
                alt=""
              />
            </div>
            <div className="flex justify-center items-center mt-6 md:mt-0">
              <button  onClick={()=>{
                console.log("clickked")
                setVisibleForm(true)
              }} className="bg-blue-500 w-full md:px-36 py-2 text-xl font-semibold text-white rounded-lg">
                Proceed
              </button>
            </div>
          </div>
        
      </div>

      {/* Conditionally render the address form fixed with respect to the window */}
      {visibleForm && (
        <div className="fixed top-[-2px] right-[-100px] w-full md:w-[40%] p-4 md:p-8">
          <AddressFormForPresciption prescriptionImage={prescriptionImage} />
        </div>
      )}
    </div>
  );
};

export default PrescriptionUploadPage;
