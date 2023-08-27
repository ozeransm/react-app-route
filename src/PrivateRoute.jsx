import { useSelector } from "react-redux";
import { isLogin, isRefresh } from "./redux/selector";
import { Navigate } from "react-router-dom";

export const PrivateRoute=({component: About})=>{
    const refreshed=useSelector(isRefresh);
    const logined=useSelector(isLogin);
    console.log((!refreshed && !logined))
    return (!refreshed && !logined) ? <Navigate to='/'/> : About;
}
// (!refreshed && !logined) ? <Navigate to='/about'/> :