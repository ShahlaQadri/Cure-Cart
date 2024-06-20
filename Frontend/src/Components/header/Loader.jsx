
  import { InfinitySpin } from 'react-loader-spinner'


  
  const Loader = () => {
    return (
      <div className='h-screen w-full flex items-center  justify-center inset-0 bg-grey-500 bg-opacity-40 z-40'><InfinitySpin
      visible={true}
      width="290"
      color="#4fa94d"
      ariaLabel="infinity-spin-loading"
      
      /></div>
    )
  }
  
  export default Loader