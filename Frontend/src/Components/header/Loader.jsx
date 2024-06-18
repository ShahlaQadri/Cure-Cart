
  import { InfinitySpin } from 'react-loader-spinner'


  
  const Loader = () => {
    return (
      <div className='h-screen w-full flex items-center  justify-center'><InfinitySpin
      visible={true}
      width="200"
      color="#4fa94d"
      ariaLabel="infinity-spin-loading"
      /></div>
    )
  }
  
  export default Loader