import { Link, useNavigate } from "react-router-dom";

export const ADMIN_PRO_DATA = [
  {
    photo: "../../../pictures/div1.png",
    name: "HK Vitals",
    price: 500,
    stock: 50,
    action: <Link to="/admin/products/:id">Manage</Link>,
  },
  {
    photo: "../../../pictures/div2.png",
    name: "Cetaphil Facewash",
    price: 300,
    stock: 50,
    action: <Link to="/admin/products/jaadu">Manage</Link>,
  },
  {
    photo: "../../../pictures/div4.png",
    name: "Vicks VapoRub",
    price: 260,
    stock: 75,
    action: <Link to="/admin/products/ramcharan">Manage</Link>,
  },
  {
    photo: "../../../pictures/div5.png",
    name: "BP Machine",
    price: 2500,
    stock: 75,
    action: <Link to="/admin/products/hay">Manage</Link>,
  },
  {
    photo: "../../../pictures/div6.png",
    name: "BP Control Tablets",
    price: 300,
    stock: 75,
    action: <Link to="/admin/products/hay">Manage</Link>,
  },
  {
    photo: "../../../pictures/div1.png",
    name: "HK Vitals",
    price: 500,
    stock: 75,
    action: <Link to="/admin/products/hello">Manage</Link>,
  },
  {
    photo: "../../../pictures/div2.png",
    name: "Cetaphil Facewash",
    price: 300,
    stock: 75,
    action: <Link to="/admin/products/1234">Manage</Link>,
  },
];

export const ADMIN_PRO_COLUMNS = [
  {
    Header: "Photo",
    accessor: "photo",
    Cell: ({ value }) => (
      <img src={value} alt="Product" className="h-14 w-12" />
    ),
  },
  {
    Header: "Name",
    accessor: "name",
    Cell: ({ value }) => <p className="w-[100px]">{value}</p>,
  },
  { Header: "Price", accessor: "price" },
  { Header: "Stock", accessor: "stock" },
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
