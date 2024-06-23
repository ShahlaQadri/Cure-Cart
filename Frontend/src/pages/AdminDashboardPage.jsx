import AdminSideBar from '../Components/dashbord/AdminSideBar';
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { BarChart } from '../Components/dashbord/Chart';
import { BsBagCheckFill } from "react-icons/bs";
import { MdAutoGraph } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import {  FaUsers } from "react-icons/fa";
import { useGetDashboardStatsQuery } from '../redux/api/dashboardAPI';
import StatsLoader from '../Components/dashbord/StatsLoader';

function toRGBA(color, opacity) {
  if (color.startsWith("#")) {
    // Convert HEX to RGBA
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  } else if (color.startsWith("rgb")) {
   
    return color.replace(")", `, ${opacity})`).replace("rgb", "rgba");
  }
  return color; 
}

function WidgetItem ({ percent, value, amount, heading, color,icon })  {
   const backgroundColor = toRGBA(color, 0.1);
  return (
    <article className="widget flex row gap-2 w-[250px] justify-between items-stretch  bg-white px-4 py-4 rounded-lg shadow-lg ">
      <div className="widget-info">
        <p className="text-sm flex gap-2 text-zinc-500">
          <span
            className="rounded-full h-6 w-6 flex items-center justify-center"
            style={{
              color: color, 
              backgroundColor: backgroundColor, 
            }}
          >
            {icon}
          </span>
          {heading}
        </p>
        <h4 className="font-extrabold text-2xl">
          {amount ? `₹${value}` : value}
        </h4>
        {percent > 0 ? (
          <span className="text-green-400 flex items-center gap-1 text-sm">
            <HiTrendingUp />+{percent}%
          </span>
        ) : (
          <span className="text-red-500 flex items-center gap-1 text-sm">
            <HiTrendingDown />
            {percent}%
          </span>
        )}
      </div>

      <div
        className="widget-circle relative h-[5rem] w-20 rounded-full grid items-center "
        style={{
          background: `conic-gradient(${color} ${
            Math.abs(percent / 100) * 360
          }deg, white 0deg)`,
        }}
      >
        <span style={{ color }}>{percent}%</span>
      </div>
    </article>
  );
}
function CategoryItem({heading,value,color}){
    return (
      <div className="category-items w-[100%] gap-0 my-4 flex justify-between items-center px-5">
        <h1 className="text-xs font-semibold text-zinc-600 capitalize">{heading}</h1>
        <div className=" w-24 bg-zinc-100 rounded-md h-2 flex-none">
          <div
            style={{
              backgroundColor: color,
              width: `${value}%`,
            }}
            className="h-2 rounded-md w-24"
          ></div>
        </div>
        <span className="text-xs font-semibold text-zinc-800">{value}%</span>
      </div>
    );
}
function AdminDashboardPage() {

   const {data,isLoading , error} = useGetDashboardStatsQuery()
   if (isLoading ) return <StatsLoader/>

  if (error) return <div>Error: {error.message}</div>;

  
  //  console.log(data?.stats.categoryCount)
  return (
    <div className="flex flex-col my-2  w-full h-[90vh] bg-zinc-50/95">
      <div className=" mx-auto flex gap-10 w-full ">
        <div className="w-[20%] h-[90vh] bg-white  text-zinc-700 ">
          <AdminSideBar />
        </div>

        <div className="main bg-zinc-50/95 px-4 w-[80%] overflow-y-auto">
          {/* <div className="bar  flex items-center h-12 border-b-2">
            <FaSearch className="text-zinc-500 text-[1.2rem]" />
            <input
              type="text"
              className="mr-auto outline-none px-[1rem] w-[400px] bg-zinc-50/95 "
              placeholder="Search for users,data,docs..."
            />
            <FaRegBell className="text-zinc-500 text-[1.2rem]" />
            <img
              src="../../pictures/dashboard user.jpg"
              alt=""
              className="h-10 w-10 mx-2 rounded-full"
            />
          </div> */}

          <section className="widget-container flex items-stretch my-4  justify-between">
          <WidgetItem
              percent={Math.round(data?.stats.changePercent.revenue)}
              value={Math.round(data?.stats.count.revenue)}
              amount={true}
              heading="Revenue"
              color="rgb(0,115,255)"
              icon={<MdAutoGraph />}
            />
            <WidgetItem
              percent={data?.stats.changePercent.order}
              value={data?.stats.count.order}
              amount={false}
              heading="Transactions"
              color="rgb(255,196,0)"
              icon={<GrTransaction />}
            />
           
            <WidgetItem
              percent={data?.stats.changePercent.user}
              value={data?.stats.count.user}
              amount={false}
              heading="Users"
              color="rgb(0,198,202)"
              icon={<FaUsers />}
            />

            <WidgetItem
              percent={data?.stats.changePercent.product}
              value={data?.stats.count.product}
              amount={false}
              heading="Products"
              color="rgb(76,0,255)"
              icon={<BsBagCheckFill />}
            />
          </section>

          <section className="graph-contaner w-full flex gap-8 ">
            <div className="chart bg-white w-[77%] rounded-lg">
              <h1 className="mt-5  text-center text-xl  text-zinc-500 mb-4">
                REVENUE & TRANSACTIONS
              </h1>
              <BarChart
                data1={data?.stats.chart.revenue}
                data2={data?.stats.chart.order}
                title1="Revenue"
                title2="Transactions"
                bgcolor1="rgb(0,115,255)"
                bgcolor2="rgba(56,153,255,0.5)"
              />
            </div>
            <div className="dashboard-categories bg-white w-[23%] flex flex-col justify-center">
              <h1 className="mt-5  text-center justify-center text-xl  text-zinc-500 mb-4">
                INVENTORY
              </h1>
              <div className="overflow-y-auto px-1 flex flex-col justify-center">
                  {data?.stats.categoryCount.map((i) => {
                    const [heading, value] = Object.entries(i)[0];
                    return (
                      <CategoryItem
                        key={heading}
                        value={value}
                        heading={heading}
                        color={`hsl(${value*1000}, ${value*100}%, 50%)`}
                      />
                    );
                  })}
                </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardPage