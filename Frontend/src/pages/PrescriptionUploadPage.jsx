import React, { useState } from 'react';
import { IoImages } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { FcAddImage } from "react-icons/fc";


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

  const removeHandler = () =>{
    setPrescriptionImage(null)
  }

  return (
    <div className="flex w-[80%] gap-20 mx-auto my-8 ">
      <div className="content w-[60%] ">
        <div className="space-y-1">
          <p
            className="text-xl font-extrabold text-zinc-600 Class
Properties
tracking-tighter"
          >
            Do you have a prescription for your medicine?
          </p>
          <p className="text-md text-zinc-700 ">
            Just upload it and we will arrange the medicines for you.
          </p>
        </div>

        <div className="upload flex gap-4  pt-6">
          <div className="border border-blue-600 rounded-lg justify-center p-4 mb-2 mr-2 flex items-center w-[35%] bg-[#EAF7FF] h-[120px]">
            <label htmlFor="upload-prescription" className="cursor-pointer">
              <input
                type="file"
                id="upload-prescription"
                className="hidden"
                onChange={handleFileChange}
              />
              <div className="flex  flex-col gap-2 justify-center items-center ">
                <FcAddImage className="text-3xl text-blue-500 " />
                <p className="text-sm font-semibold text-blue-500">
                  Upload Prescription
                </p>
              </div>
            </label>
          </div>

          <div className="border border-blue-600 rounded-lg justify-center p-4 mb-2 mr-2 flex items-center w-[35%] bg-[#EAF7FF] h-[120px]">
            <label htmlFor="upload-prescription" className="cursor-pointer">
              <input
                type="file"
                id="upload-prescription"
                className="hidden"
                onChange={handleFileChange}
              />
              <div className="flex  flex-col gap-2 justify-center items-center ">
                <IoImages className="text-2xl text-[#8CBCD6] " />
                <p className="text-sm font-semibold text-blue-500">
                  Past Prescription
                </p>
              </div>
            </label>
          </div>
        </div>
        <div class="border-4 rounded-full border-gray-300 my-6"></div>

        {prescriptionImage && (
          <div>
            <p className="font-bold">Uploaded presciption</p>
            <div className="relative prescription-preview my-6 w-auto rounded-lg    ">
              <button
                onClick={removeHandler}
                className="absolute -top-2 left-[100px] text-[#8CBCD6]   rounded-full"
              >
                <MdCancel className="text-2xl bg-white rounded-full" />
              </button>
              <img
                src={prescriptionImage}
                alt="Prescription Preview"
                className="h-[120px] w-[120px] rounded border-2 "
              />
            </div>
          </div>
        )}

        <div className="confirm flex items-center border border-gray-300 rounded-lg py-1 ">
          <img className="h-24 w-24" src="pictures/presuser.jpg" alt="" />
          <div className=" ml-4 ">
            <p className="text-md text-zinc-600 w-[460px]">
              Our pharmacist will call to confirm the medicines in your
              prescription.
            </p>
          </div>
        </div>
      </div>

      <div className="proceed  w-[40%]">
        <div className="flex justify-center items-center">
          <img
            className="h-[300px]"
            src="../../pictures/RX prescription flat vector illustration.jpg"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-blue-500 px-36 py-2 text-xl font-semibold text-white rounded-lg">
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrescriptionUploadPage;
