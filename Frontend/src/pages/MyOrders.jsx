import Profile from "../Components/Profile";
import Orderstable from '../Components/Orderstable';

function MyOrders() {
  return (
    <div className="profilePage flex flex-col md:flex-row px-5  mx-auto gap-5 w-[90%]">
      <div className="mb-10 flex gap-10 w-full md:w-[25%]  ">
        <Profile />
      </div>
      <div className="main  h-[90vh] w-[85%]  rounded-lg">
          <h1 className="mt-5  ml-5 text-3xl  text-zinc-500 mb-4">My Orders</h1>
          <Orderstable />
        </div>
    </div>
  );
}

export default MyOrders