import { useEffect, useMemo, useState } from "react";
import { useTable, usePagination } from "react-table";
import { ADMIN_CUS_COLUMNS } from "./Admincusdata";
import { useDeleteUserMutation, useGetAllUsersQuery } from "../../redux/api/userAPI";
import { AiFillDelete } from "react-icons/ai";
import SkeletonLoader from "./SkeletonLoader";
import femaleUserImage from '../../../public/pictures/girlprofile.png';
import maleUserImage from '../../../public/pictures/boyprofile.png';
import { responseToste } from "../../utils/Features";
import { useNavigate } from "react-router-dom";

const Admincustable = () => {
  const { data, isLoading, error } = useGetAllUsersQuery();
  const [allCustomers, setAllCustomers] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [deleteUser] = useDeleteUserMutation()
  const navigate = useNavigate()

  // Function to handle user deletion
  const deleteUserHandler =async (id) => {
    console.log("Delete user ID:", id);
    alert(`Delete user with ID: ${id}`);
    console.log(id)
    const res = await deleteUser(id)
    responseToste(res,navigate,"/admin/customers")
  };

  useEffect(() => {
    // Function to transform the fetched data
    const transformData = async () => {
      if (data && Array.isArray(data?.users)) {
        const transformedUsers = data?.users.map((user) => ({
          photo: user?.gender === "female" ? femaleUserImage : maleUserImage,
          name: user.name,
          gender: user?.gender || "Not Available",
          email: user.email,
          role: user.role,
          action: (
            <button onClick={() => deleteUserHandler(user._id)} className="text-red-500">
              <AiFillDelete />
            </button>
          ),
        }));
        setAllCustomers(transformedUsers);
      } else {
        console.warn("Data or users are undefined or not an array");
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
      data: allUsers,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination
  );

  const { pageIndex } = state;

  if (isLoading || isDataLoading) return <SkeletonLoader />;

  if (error) return <div>Error: {error.message}</div>;

  if (allUsers.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div className="md:px-10">
      <div className="table-div w-full overflow-x-auto overflow-hidden">
        <table {...getTableProps()} className="table-auto w-full">
          <thead className="text-md text-zinc-500 py-10">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
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
                <tr {...row.getRowProps()} className="border-b">
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="py-3 text-sm px-10"
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
