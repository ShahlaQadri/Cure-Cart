import  { useEffect, useMemo, useState } from 'react'
import { useTable, usePagination } from 'react-table' 
import { ADMIN_TRAN_COLUMNS } from './Admintrandata'
import { useAllOrdersQuery } from '../../redux/api/ordersAPI'
import { Link } from 'react-router-dom'
import SkeletonLoader from './SkeletonLoader'

const Admintrantable = () => {
  const { data, isLoading, error } = useAllOrdersQuery()
  const [adminAllOrders, setAdminAllOrders] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  // console.log(data.orders)
  useEffect(() => {
    // Function to transform the fetched data
    const transformData = async () => {
      if (data && Array.isArray(data?.orders)) {
        const transformedOrders = data?.orders.map((order) => ({
          user: order.user.name,
          status: order.status,
          amount: order.total,
          quantity: order.orderItems.length,
          discount: 100,
          action: <Link to={`/admin/transactions/${order._id}`}>Manage</Link>,
          
          
        }));
        setAdminAllOrders(transformedOrders);
      } else {
        console.warn("Data or orders are undefined or not an array");
      }
      setIsDataLoading(false); // Set loading state to false once processing is done
    };

    transformData();
  }, [data]);
    const columns = useMemo(() => ADMIN_TRAN_COLUMNS, [])
    const alldata = useMemo(() => adminAllOrders, [adminAllOrders])

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
        initialState: { pageIndex: 0, pageSize: 6  }
    },
       usePagination
       )

       const { pageIndex } = state
       if (isLoading || isDataLoading) return <SkeletonLoader/>

       if (error) return <div>Error: {error.message}</div>;
     
       if (alldata.length === 0) {
         return <div className='mt-32 ml-[400px] text-3xl text-zinc-400'>No Orders available</div>;
       }
  return (
    <div className='md:px-20'>
      <div className='table-div w-full  overflow-x-auto overflow-hidden'>
        <table {...getTableProps()} className="table-auto  w-[100%] ">
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
      </table></div>
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

export default Admintrantable
