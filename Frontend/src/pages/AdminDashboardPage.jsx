import React from 'react'
import AdminSideBar from '../Components/dashbord/AdminSideBar';
import { FaRegBell, FaSearch } from 'react-icons/fa';
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { BarChart } from '../Components/dashbord/Chart';
import { BsBagCheckFill } from "react-icons/bs";
import { MdAutoGraph } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";
const categorie = [
  {
    heading: "Medicine",
    value: 34,
  },
  {
    heading: "Baby Food",
    value: 64,
  },
  {
    heading: "Skin Care",
    value: 14,
  },
  {
    heading: "Electronics",
    value: 88,
  },
];
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
    <article className="widget flex row justify-between items-stretch gap-2 bg-white px-6 py-5 rounded-lg shadow-lg w-64">
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
function CategoryItems({heading,value,color}){
    return (
      <div className="category-items w-[100%] my-4 flex justify-between items-center px-4">
        <h1 className="text-sm text-zinc-600">{heading}</h1>
        <div className=" w-28 bg-zinc-100 rounded-md h-2 flex-none">
          <div
            style={{
              backgroundColor: color,
              width: `${value}%`,
            }}
            className="h-2 rounded-md"
          ></div>
        </div>
        <span className="text-xs font-extrabold text-zinc-800">{value}%</span>
      </div>
    );
}
function AdminDashboardPage() {
  return (
    <div className="profilePage flex flex-col my-2  w-full h-[90vh] bg-zinc-50/95">
      <div className=" flex  w-full ">
        <div className="w-[20%] h-[90vh] bg-white rounded-lg text-zinc-700 ">
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

          <section className="widget-container flex items-stretch gap-16 py-6  justify-between">
            <WidgetItem
              percent={80}
              amount={false}
              value={32434}
              heading="Transactions"
              color="rgb(255,196,0)"
              icon={<GrTransaction />}
            />
            <WidgetItem
              percent={96}
              amount={true}
              value={375334}
              heading="Revenue"
              color="rgb(0,115,255)"
              icon={<MdAutoGraph />}
            />
            <WidgetItem
              percent={-14}
              amount={false}
              value={13}
              heading="Users"
              color="rgb(0,198,202)"
              icon={<FaUsers />}
            />

            <WidgetItem
              percent={40}
              amount={false}
              value={534}
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
                data1={[33, 400, 566, 775, 344, 292, 423, 575, 66, 77, 88]}
                data2={[133, 744, 266, 1055, 234, 200, 323]}
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
                {categorie.map((i) => (
                  <CategoryItems
                    value={i.value}
                    heading={i.heading}
                    color={`hsl(${i.value * 6},${100}%,50%)`}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardPage