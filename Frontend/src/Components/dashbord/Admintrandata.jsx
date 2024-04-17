import { Link } from "react-router-dom";

export const ADMIN_TRAN_DATA = [
  {
    photo: "../../../pictures/pictures/div1.png",
    id: 1,
    amount: 5100,
    quantity: 5,
    discount: 100,
    action: <Link to="/admin/transactions/cddid">Manage</Link>,
  },
  {
    photo: "../../../pictures/div2.png",
    id: 2,
    amount: 3000,
    quantity: 5,
    discount: 100,
    action: <Link to="/admin/transactions/xyzzzzz">Manage</Link>,
  },
  {
    photo: "../../../pictures/div4.png",
    id: 3,
    amount: 2660,
    quantity: 7,
    discount: 100,
    action: <Link to="/admin/transactions/:xyzzzzz">Manage</Link>,
  },
  {
    photo: "../../../pictures/div5.png",
    id: 4,
    amount: 2500,
    quantity: 8,
    discount: 100,
    action: <Link to="/admin/transactions/:xyzzzzz">Manage</Link>,
  },
  {
    photo: "../../../pictures/div6.png",
    id: 5,
    amount: 3500,
    quantity: 2,
    discount: 100,
    action: <Link to="/admin/transactions/:xyzzzzz">Manage</Link>,
  },
  {
    photo: "../../../pictures/div1.png",
    id: 6,
    amount: 5400,
    quantity: 3,
    discount: 100,
    action: <Link to="/admin/transactions/:xyzzzzz">Manage</Link>,
  },
  {
    photo: "../../../pictures/div2.png",
    id: 7,
    amount: 3700,
    quantity: 7,
    discount: 100,
    action: <Link to="/admin/transactions/:xyzzzzz">Manage</Link>,
  },
];


export const ADMIN_TRAN_COLUMNS = [
  {
    Header: "Photo",
    accessor: "photo",
    Cell: ({ value }) => (
      <img src={value} alt="Product" className="h-14 w-12" />
    ),
  },
  { Header: "ID", accessor: "id" },
  { Header: "Quantity", accessor: "quantity" },
  { Header: "Discount", accessor: "discount" },
  { Header: "Amount", accessor: "amount" },
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