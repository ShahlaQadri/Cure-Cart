
  import { Bars } from 'react-loader-spinner'


  
  const Loader = () => {
    return (
      <div className='h-screen w-full flex items-center  justify-center inset-0 bg-grey-500 bg-opacity-40 z-40'>
        <Bars
  height="70"
  width="70"
  color="#0071BC"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
      
      </div>
    )
  }
  
  export default Loader