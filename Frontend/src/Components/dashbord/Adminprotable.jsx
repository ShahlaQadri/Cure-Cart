import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import { ADMIN_PRO_DATA, ADMIN_PRO_COLUMNS } from "./Adminprodata";

const Adminprotable = () => {
  const columns = useMemo(() => ADMIN_PRO_COLUMNS, []);
  const data = useMemo(() => ADMIN_PRO_DATA, []);

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
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination
  );

  const { pageIndex } = state;

  return (
    <>
      <table {...getTableProps()} className="table-auto  w-[95%] ">
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
                      
                      {cell.render("Cell") }
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
    </>
  );
};

export default Adminprotable;
