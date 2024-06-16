import Profile from "../Components/Profile";
import UsersPresciptionTable from "../Components/UsersPresciptionTable";


export default function AdminPresciptionOrderPage() {
    return (
        <div className="profilePage flex px-5  mx-auto gap-5 w-[90%]">
          <div className="mb-10 flex gap-10 w-[25%]  ">
            <Profile />
          </div>
          <div className="main  h-[90vh] w-[85%]  rounded-lg">
              <h1 className="mt-5  ml-5 text-3xl  text-zinc-500 mb-4">My  Presciption Orders</h1>
                            <UsersPresciptionTable/>
            </div>
        </div>
      );
}
