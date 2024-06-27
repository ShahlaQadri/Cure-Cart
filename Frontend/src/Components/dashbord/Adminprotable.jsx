import { useEffect, useMemo, useState } from "react";
import { useTable, usePagination } from "react-table";
import { ADMIN_PRO_COLUMNS } from "./Adminprodata";
import { useGetAllProductsQuery } from "../../redux/api/productsAPI";
import { Link } from "react-router-dom";
import { server } from "../../main";
import SkeletonLoader from "./SkeletonLoader";

const Adminprotable = () => {
  const { data, isLoading, error } = useGetAllProductsQuery();
  const [adminAllProducts, setAdminAllProducts] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    // Function to transform the fetched data
    const transformData = async () => {
      if (data && Array.isArray(data.products)) {
        const transformedProducts = data.products.map((product) => ({
          photo: `${server}${product.photo}`, 
          name: product.name || "Unknown Product",
          price: product.price !== undefined ? product.price : 0,
          stock: product.stock !== undefined ? product.stock : 0,
          action: <Link to={`/admin/products/${product._id}`}>Manage</Link>,
        }));
        setAdminAllProducts(transformedProducts);
      } else {
        console.warn("Data or products are undefined or not an array");
      }
      setIsDataLoading(false); // Set loading state to false once processing is done
    };

    transformData();
  }, [data]);

  const columns = useMemo(() => ADMIN_PRO_COLUMNS, []);
  const alldata = useMemo(() => adminAllProducts, [adminAllProducts]);

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
    return <div>No products available</div>;
  }

  return (
    <div className="">
      <div className='table-div w-full  overflow-x-auto overflow-hidden'>
      <table {...getTableProps()} className="table-auto w-[100%]">
        <thead className="text-md text-zinc-500 py-10">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  key={column.id}
                  className="py-5 px-20 text-left my-10"
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
                  <td {...cell.getCellProps()} key={cell.column.id} className="mix-blend-multiply py-2 text-sm  px-20">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
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

export default Adminprotable;
