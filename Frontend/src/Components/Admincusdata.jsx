import { AiFillDelete } from "react-icons/ai";


export const ADMIN_CUS_DATA = [
    { photo: 'pictures/user.png', name: 'Chance Curtis', gender: 'Male', email: 'karasik@verizon.net', role: 'User', action:<AiFillDelete /> },
    { photo: 'pictures/userfemale.jpg', name: 'Gabriela Herman', gender: 'Female', email: 'kludge@live.com', role: 'User', action:<AiFillDelete /> },
    { photo: 'pictures/user.png', name: 'Chance Curtis', gender: 'Male', email: 'bester@yahoo.ca', role: 'User', action:<AiFillDelete /> },
    { photo: 'pictures/userfemale.jpg', name: 'Gabriela Herman', gender: 'Female', email: 'mschwartz@mac.com', role: 'User', action:<AiFillDelete /> },
    { photo: 'pictures/user.png', name: 'Chance Curtis', gender: 'Male', email: 'karasik@verizon.net', role: 'User', action:<AiFillDelete /> },
    { photo: 'pictures/userfemale.jpg', name: 'Gabriela Herman', gender: 'Female', email: 'bester@yahoo.ca', role: 'User', action:<AiFillDelete /> },
    { photo: 'pictures/user.png', name: 'Chance Curtis', gender: 'Male', email: 'karasik@verizon.net', role: 'User', action:<AiFillDelete /> },
    
];


export const ADMIN_CUS_COLUMNS = [
    { Header: 'Photo', accessor: 'photo', Cell: ({ value }) => <img src={value} alt="Product" className="h-12 w-12 rounded-full" /> },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Gender', accessor: 'gender' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Role', accessor: 'role' },
    { Header: 'Action', accessor: 'action', Cell: ({ value }) => <div className="flex justify-center items-center text-2xl"><AiFillDelete className="text-red-600"/></div>},

];