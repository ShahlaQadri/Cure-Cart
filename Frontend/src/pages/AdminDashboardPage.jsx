import AdminSideBar from '../Components/dashbord/AdminSideBar';
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { BarChart } from '../Components/dashbord/Chart';
import { BsBagCheckFill } from "react-icons/bs";
import { MdAutoGraph } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";
import { useGetDashboardStatsQuery } from '../redux/api/dashboardAPI';
import StatsLoader from '../Components/dashbord/StatsLoader';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

function toRGBA(color, opacity) {
  if (color.startsWith("#")) {
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

function WidgetItem({ percent, value, amount, heading, color, icon }) {
  const backgroundColor = toRGBA(color, 0.1);
  return (
    <article className="widget flex flex-row md:flex-row gap-2 w-full md:w-[250px] justify-between items-stretch bg-white px-4 py-4 rounded-lg shadow-lg">
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
            <HiTrendingUp />+{percent > 10000 ? 9999 : percent}%
          </span>
        ) : (
          <span className="text-red-500 flex items-center gap-1 text-sm">
            <HiTrendingDown />
            {percent}%
          </span>
        )}
      </div>

      <div
        className="widget-circle relative h-[5rem] w-20 rounded-full grid items-center"
        style={{
          background: `conic-gradient(${color} ${Math.abs(percent / 100) * 360}deg, white 0deg)`,
        }}
      >
        <span style={{ color }}>{percent > 10000 ? 9999 : percent}%</span>
      </div>
    </article>
  );
}

function CategoryItem({ heading, value, color }) {
  return (
    <div className="category-items w-[100%] gap-0 my-4 flex justify-between items-center px-5">
      <h1 className="text-xs font-semibold text-zinc-600 capitalize">{heading}</h1>
      <div className="w-24 bg-zinc-100 rounded-md h-2 flex-none">
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
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, error } = useGetDashboardStatsQuery();

  if (isLoading) return <StatsLoader />;
  if (error) return <div>Error: {error.message}</div>; 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col my-2 w-full h-[90vh] bg-zinc-50/95">
      <div className="mx-auto flex flex-col md:flex-row gap-10 w-full">
      <button
        className="block md:hidden absolute  top-28 z-50 right-8 p-2 text-gray-700 bg-gray-200 rounded-full"
        onClick={toggleMenu}
      >
        <GiHamburgerMenu size={24} />
      </button>
        <div className={`${
          isOpen ? "block" : "hidden"
        } md:block fixed md:relative top-[6rem] md:top-auto right-0 z-50 md:z-auto w-[100%] h-screen  md:w-[20%] md:h-[90vh]  text-zinc-700 mx-auto justify-center items-center bg-white shadow-lg md:shadow-none rounded-lg md:rounded-none`}
      >
          <AdminSideBar setIsOpen={setIsOpen} />
        </div>

        <div className="main bg-zinc-50/95 px-4 w-full md:w-[80%] overflow-y-auto">
          <section className="widget-container flex flex-col md:flex-row items-stretch my-4 justify-between gap-4 md:gap-8">
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

          <section className="graph-container flex flex-col md:flex-row gap-8">
            <div className="chart bg-white w-full md:w-[77%] rounded-lg">
              <h1 className="mt-5 text-center text-xl text-zinc-500 mb-4">
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
            <div className="dashboard-categories bg-white w-full md:w-[23%] flex flex-col justify-center">
              <h1 className="mt-5 text-center justify-center text-xl text-zinc-500 mb-4">
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
                      color={`hsl(${value * 1000}, ${value * 100}%, 50%)`}
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

export default AdminDashboardPage;
