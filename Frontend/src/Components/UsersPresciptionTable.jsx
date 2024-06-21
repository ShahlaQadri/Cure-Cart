import { useEffect, useMemo, useState } from "react";
import { useTable, usePagination } from "react-table";
import { Link } from "react-router-dom";
import { USER_PREC_COLUMNS } from "./UsersPresciptionTableData";
import { useMyPresciptionOrdersQuery } from "../redux/api/presciptionAPI";
import { server } from "../main";
import SkeletonLoader from "./dashbord/SkeletonLoader";

const UsersPresciptionTable = () => {
  const { data, isLoading, error } = useMyPresciptionOrdersQuery();
  const [userAllPresciptionOrders, setUserAllPresciptionOrders] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().slice(0, 10); // Slices 'YYYY-MM-DD' from 'YYYY-MM-DDTHH:mm:ss.sssZ'
  };
  useEffect(() => {
    // Function to transform the fetched data
    const transformData = () => {
      console.log("Fetched Data:", data);
      if (data && Array.isArray(data.orders)) {
        const transformedProducts = data.orders.map((order) => ({
          photo: `${server}${order.presciption}`, // Example static photo URL
          id: order._id,
          date: formatDate(order.createdAt),
          status: order.status,
          action: <Link to={`/admin/products/${order._id}`}>Manage</Link>, // Correct dynamic URL
        }));
        console.log("Transformed Data:", transformedProducts);
        setUserAllPresciptionOrders(transformedProducts);
      } else {
        console.warn("Data or orders are undefined or not an array");
      }
      setIsDataLoading(false); // Set loading state to false once processing is done
    };

    transformData();
  }, [data]);

  console.log("Transformed Orders", userAllPresciptionOrders);

  const columns = useMemo(() => USER_PREC_COLUMNS, []);
  const alldata = useMemo(() => userAllPresciptionOrders, [userAllPresciptionOrders]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    prepareRow,
  } = useTable(
    {
      columns,
      data: alldata,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination
  );

  const { pageIndex } = state;

  if (isLoading || isDataLoading) return <SkeletonLoader/>

       if (error) return <div>Error: {error.message}</div>;
     
       if (alldata.length === 0) {
         return <div className='mt-32 ml-[400px] text-3xl text-zinc-400'>No Orders available</div>;
       }

  return (
    <div className="">
      <table {...getTableProps()} className="table-auto w-[100%] px-10">
        <thead className="text-md text-zinc-500 py-10">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  key={column.id}
                  className="py-5 px-10 text-left my-10"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id} className="border-b">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} key={cell.column.id} className="py-2 text-sm px-5">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-center items-center gap-2 mt-10">
        <button
          className="px-4 py-1 text-sm font-semibold bg-blue-300 rounded-md"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <span>
          <strong className="text-sm mx-1">
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button
          className="px-4 py-1 text-sm font-semibold bg-blue-300 rounded-md"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UsersPresciptionTable;
