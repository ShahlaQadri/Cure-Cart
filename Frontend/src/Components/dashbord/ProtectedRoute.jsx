import { Navigate, Outlet } from "react-router-dom"


const ProtectedRoute = ({isAuthenticated,children,adminRoute,admin,redirect="/"}) => {
  
  if(isAuthenticated)return <Navigate to={redirect}/>
  if(adminRoute && !admin)return <Navigate to={redirect}/>
  
  return children?children:<Outlet/>
}

export default ProtectedRoute