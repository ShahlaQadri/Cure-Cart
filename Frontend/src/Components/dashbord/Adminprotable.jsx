import  { useEffect, useMemo, useState } from "react";
import { useTable, usePagination } from "react-table";
import {  ADMIN_PRO_COLUMNS } from "./Adminprodata";
import { useGetAllProductsQuery } from "../../redux/api/productsAPI";
import { Link } from "react-router-dom";

const Adminprotable = () => {
 
  
  const {data ,isLoading} = useGetAllProductsQuery()
  console.log("all fetched products",data?.products)
  const [adminAllProducts, setAdminAllProducts] = useState([]);

  useEffect(() => {

  // Transform fetchedProducts into the desired format
  const transformedProducts = data?.products.map((product) => ({
    photo:`http://localhost:3000/${product.photo}` ,// Example of a static photo 
    name: product.name || "Unknown Product",
    price: product.price !== undefined ? product.price : 0,
    stock: product.stock !== undefined ? product.stock : 0, // Assuming 'stock' is also fetched
    action: <Link to={`/admin/products/${product._id}`}>Manage</Link>,
  }));
  setAdminAllProducts(transformedProducts);
}, [data?.products]); 
const columns = useMemo(() => ADMIN_PRO_COLUMNS, []);
const alldata = useMemo(() => adminAllProducts, [adminAllProducts]);
// console.log("transformed products",adminAllProducts)

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
      data:alldata,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination
  );

  const { pageIndex } = state;

  if(isLoading)return <div>loading...</div>
  return (
    <div className="">
      <table {...getTableProps()} className="table-auto w-[100%]">
        <thead className="text-md text-zinc-500 py-10">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="py-5 px-20 text-left  my-10"
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
                      className="py-2 text-sm px-20  "
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
