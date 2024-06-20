




export const ADMIN_TRAN_COLUMNS = [
  {
    Header: "User",
    accessor: "user",
  },
  { Header: "Amount", accessor: "amount" },
  { Header: "Quantity", accessor: "quantity" },
  { Header: "Discount", accessor: "discount" },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ value }) => (
      <div
        className={`${
          value === "Shipped"
            ? "text-red-500 bg-red-100  border-red-400"
            : value === "Delivered"
            ? "text-green-400 bg-green-100  border-green-400"
            : "text-yellow-600 bg-yellow-100  border-yellow-400"
        } px-2 text-md  py-1 border-2 rounded-lg text-center`}
      >
        {value}
      </div>
    ),
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: ({ value }) => (
      <div className="text-blue-500  px-2 text-sm font-extralight py-1 bg-blue-200 w-fit rounded-md">
        {value}
      </div>
    ),
  },
];