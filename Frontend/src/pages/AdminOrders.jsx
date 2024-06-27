import Adminprofile from "../Components/dashbord/AdminSideBar";
import Admintrantable from "../Components/dashbord/Admintrantable";

export default function AdminOrders() {
  return (
    <div className="profilePage flex flex-col   h-[90vh] bg-zinc-50/95">
      <div className="mx-auto flex gap-10 w-full ">
        <div className="hidden md:block md:w-[20%] md:h-[90vh] bg-white text-zinc-700  ">
          <Adminprofile />
        </div>

        <div className="main w-[80%]  h-[90vh] bg-white-50/95 rounded-lg">
          <h1 className="mt-5 ml-10 text-3xl  text-zinc-500 mb-4">Orders</h1>
          <Admintrantable />
        </div>
      </div>
    </div>
  );
}
