import { useEffect, useMemo, useState } from 'react';
import { useTable, usePagination } from 'react-table';
import { ORDERS_COLUMNS } from './Ordersdata'; // Ensure this path is correct
import { useMyOrdersQuery } from '../redux/api/ordersAPI';
import { Link } from 'react-router-dom';
import SkeletonLoader from './dashbord/SkeletonLoader';

const Orderstable = () => {
  const { data, isLoading, error } = useMyOrdersQuery();
  const [myOrders, setMyOrders] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [expandedRows, setExpandedRows] = useState({});

  useEffect(() => {
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
        console.warn('Data or orders are undefined or not an array');
      }
      setIsDataLoading(false);
    };

    transformData();
  }, [data]);

  const columns = useMemo(() => ORDERS_COLUMNS, []);
  const alldata = useMemo(() => myOrders, [myOrders]);

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
      <table {...getTableProps()} className="table-auto w-full">
        <thead className="text-md text-zinc-500 py-10">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th
                  {...column.getHeaderProps()}
                  className={`py-5 px-10 text-left font-bold text-sm my-10 ${index !== 0 ? 'hidden sm:table-cell' : ''}`}
                >
                  {column.render('Header')}
                </th>
              ))}
              <th className="py-5 px-10 text-left font-bold text-sm my-10 sm:hidden">
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
                <tr {...row.getRowProps()} className="border-b">
                  {row.cells.map((cell, index) => (
                    <td
                      {...cell.getCellProps()}
                      className={`py-3 text-xs px-10 ${index !== 0 ? 'hidden sm:table-cell' : ''}`}
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                  <td className="py-3 text-xs px-10 sm:hidden">
                    <button
                      className="px-4 py-1 text-xs font-semibold bg-blue-300 rounded-md"
                      onClick={() => toggleRow(row.original.id)}
                    >
                      {isExpanded ? 'Hide' : 'View More'}
                    </button>
                  </td>
                </tr>
                {isExpanded && (
                  <tr className="border-b sm:hidden">
                    <td colSpan={5} className="py-3 text-xs px-10">
                      <div className="grid grid-cols-2 gap-4">
                        {row.cells.map((cell, index) => (
                          index !== 0 && (
                            <div key={index} className="py-2">
                              <div className="font-bold text-xs">{headerGroups[0].headers[index].render('Header')}</div>
                              <div className="text-xs">{cell.render('Cell')}</div>
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
            {pageIndex + 1} Of {pageOptions.length}
          </strong>{' '}
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

export default Orderstable;
