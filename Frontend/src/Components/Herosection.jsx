

function Herosection() {
  return (
    <div className="slider rounded-3xl md:h-[26rem] w-full flex flex-row md:flex-row text-[#3E5C75] bg-[#B0E5F2] overflow-hidden">
      <div className="  w-[60%] md:pl-10 left flex flex-col justify-center items-center md:items-baseline px-2 py-4 md:px-12 md:py-12 space-y-2 md:space-y-8 md:ml-[120px]">
         
       <div>
       <p className="3/4 mb-2  text-white md:font-semibold text-[8px] md:leading-3   md:text-sm ">
          We work to take care of your health and body{" "}
        </p>
       <h1 className="text-md  leading-5 font-extrabold md:leading-none md:text-[4rem]">
          True Healthcare
        </h1>
        <h1 className="text-md  leading-5 font-extrabold md:leading-none md:text-[4rem]">
          For your Family
        </h1>
       </div>
        {/* <p className="3/4 mx-4 text-center md:text-center md:text-2xl">
          Get up to 18% OFF on Diabetes Care{" "}
        </p> */}
        <button className="text-white text-xs bg-[#0071BC] px-4 py-1 my-3 md:px-10 md:py-2 md:my-6 font-bold mx-5 md:text-xl">
          Shop Now
        </button>
      </div>
      <div className="right w-[40%] md:mr-28 items-baseline justify-center ">
        <img
          className="w-full h-full  md:w-[36rem]  md:mx-8"
          src="pictures/doctornew.png"
          alt=""
        />
      </div>
    </div>
  );
}
export default Herosection;
