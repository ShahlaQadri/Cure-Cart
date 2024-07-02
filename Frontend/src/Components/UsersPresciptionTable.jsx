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
  const [expandedRows, setExpandedRows] = useState({});

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().slice(0, 10);
  };

  useEffect(() => {
    const transformData = () => {
      if (data && Array.isArray(data.orders)) {
        const transformedProducts = data.orders.map((order) => ({
          photo: `${server}${order.presciption}`,
          id: order._id,
          date: formatDate(order.createdAt),
          status: order.status,
          action: <Link to={`/admin/products/${order._id}`}>Manage</Link>,
        }));
        setUserAllPresciptionOrders(transformedProducts);
      } else {
        console.warn("Data or orders are undefined or not an array");
      }
      setIsDataLoading(false);
    };

    transformData();
  }, [data]);

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

  const toggleRow = (id) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (isLoading || isDataLoading) return <SkeletonLoader />;
  if (error) return <div>Error: {error.message}</div>;
  if (alldata.length === 0) {
    return <div className="mt-32 ml-[400px] text-3xl text-zinc-400">No Orders available</div>;
  }

  return (
    <div className="">
      <table {...getTableProps()} className="table-auto w-[100%] md:px-10 px-2">
        <thead className="text-md text-zinc-500 py-10">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column, index) => (
                <th
                  {...column.getHeaderProps()}
                  key={column.id}
                  className={`py-5 md:px-10 px-4 text-left font-bold text-sm my-10 ${index > 1 ? "hidden sm:table-cell" : ""}`}
                >
                  {column.render("Header")}
                </th>
              ))}
              <th className="py-5 px-10 ml-4 text-left font-bold text-sm my-10 sm:hidden">
                Actions
              </th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            const isExpanded = expandedRows[row.original.id];
            return (
              <>
                <tr {...row.getRowProps()} key={row.id} className="border-b">
                  {row.cells.map((cell, index) => (
                    <td
                      {...cell.getCellProps()}
                      key={cell.column.id}
                      className={`py-3 text-xs md:px-10   px-4 ${index > 1 ? "hidden sm:table-cell" : ""}`}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                  <td className="py-4 text-xs    px-2 sm:hidden">
                    <button
                      className="px-4 ml-9  py-1 text-xs font-semibold bg-blue-300 rounded-md"
                      onClick={() => toggleRow(row.original.id)}
                    >
                      {isExpanded ? "Hide" : "View More"}
                    </button>
                  </td>
                </tr>
                {isExpanded && (
                  <tr className="border-b sm:hidden">
                    <td colSpan={5} className="py-3 text-xs px-10">
                      <div className="grid grid-cols-2 gap-10">
                        {row.cells.map((cell, index) => (
                          index > 1 && (
                            <div key={index} className="py-2">
                              <div className="font-bold text-xs">
                                {headerGroups[0].headers[index].render("Header")}
                              </div>
                              <div className="text-xs">{cell.render("Cell")}</div>
                            </div>
                          )
                        ))}
                      </div>
                    </td>
                  </tr>
                )}
              </>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-center items-center gap-2 mt-10">
        <button
          className="px-4 py-1 text-xs font-semibold bg-blue-300 rounded-md"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <span className="text-xs">
          <strong className="mx-1">
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <button
          className="px-4 py-1 text-xs font-semibold bg-blue-300 rounded-md"
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
