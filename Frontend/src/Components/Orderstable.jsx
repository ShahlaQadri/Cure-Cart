import  { useEffect, useMemo, useState } from 'react'
import { useTable, usePagination } from 'react-table' 
import { ORDERS_COLUMNS } from './Ordersdata'
import { useMyOrdersQuery } from '../redux/api/ordersAPI'
import { Link } from 'react-router-dom'

const Orderstable = () => {
  const {data,isLoading, error} = useMyOrdersQuery()
  const [myOrders, setMyOrders] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  
  console.log(data?.orders)
  useEffect(() => {
    // Function to transform the fetched data
    const transformData = async () => {
      if (data && Array.isArray(data?.orders)) {
        const transformedOrders = data?.orders.map((order) => ({
          id: order._id,
          status: order.status,
          amount: order.total,
          quantity: order.orderItems.length,
          discount: order.discount,
          action: <Link to={`/admin/transactions/${order._id}`}>Manage</Link>,
        }));
        setMyOrders(transformedOrders);
      } else {
        console.warn("Data or orders are undefined or not an array");
      }
      setIsDataLoading(false); // Set loading state to false once processing is done
    };

    transformData();
  }, [data]);

    const columns = useMemo(() => ORDERS_COLUMNS, [])
    const alldata = useMemo(() => myOrders, [myOrders])

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
    }=useTable(
        {
        columns,
        data:alldata,
        initialState: { pageIndex: 0, pageSize: 5 }
    },
       usePagination
       )

       const { pageIndex } = state
       if (isLoading || isDataLoading) return <div>Loading...</div>;

       if (error) return <div>Error: {error.message}</div>;
     
       if (alldata.length === 0) {
         return <div>No products available</div>;
       }
  return (
    <div className="">
      <table {...getTableProps()} className="table-auto  w-full  ">
        <thead className="text-md text-zinc-500 py-10">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="py-5 px-10 text-left font-bold text-md my-10"
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
              <tr {...row.getRowProps()} className="border-b ">
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="py-3 text-sm px-10  "
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
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
            {pageIndex + 1} Of {pageOptions.length}
          </strong>{" "}
        </span>
        <button
          className="px-4 py-1 text-sm font-semibold  bg-blue-300 rounded-md"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Orderstable
