import { useEffect, useMemo, useState } from "react";
import { useTable, usePagination } from "react-table";
import {  ADMIN_CUS_COLUMNS } from "./Admincusdata";
import { useGetAllUsersQuery,  } from "../../redux/api/userAPI";
import { AiFillDelete } from "react-icons/ai";

const Admincustable = () => {
  const {data,isLoading, error} = useGetAllUsersQuery()
  const [allCustomers, setAllCustomers] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const deleteUserHandler= (id)=>{
    // console.log("delete user",id)
    // alert("hy")
  }
  // console.log(data)
  useEffect(() => {
    // Function to transform the fetched data
    const transformData = async () => {
      if (data && Array.isArray(data?.users)) {
        const transformedUsers = data?.users.map((user) => ({
          photo: "../../../pictures/dashboard user.jpg",
          name: user.name,
          gender: user?.gender || "Not Available",
          email: user.email,
          role: user.role,
          action: <button onClick={()=>{deleteUserHandler(user._id)}}><AiFillDelete /></button>,
          
          
          
        }));
        setAllCustomers(transformedUsers);
      } else {
        console.warn("Data or orders are undefined or not an array");
      }
      setIsDataLoading(false); // Set loading state to false once processing is done
    };

    transformData();
  }, [data]);
  const columns = useMemo(() => ADMIN_CUS_COLUMNS, []);
  const allUsers = useMemo(() => allCustomers, [allCustomers]);

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
      data:allUsers,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination
  );

  const { pageIndex } = state;
  if (isLoading || isDataLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  if (allUsers.length === 0) {
    return <div>No products available</div>;
  }
  return (
    <div className="px-10">
      <table {...getTableProps()} className="table-auto  w-[100%]">
        <thead className="text-md text-zinc-500 py-10">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="py-5 px-10 text-left  my-10"
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

export default Admincustable;
