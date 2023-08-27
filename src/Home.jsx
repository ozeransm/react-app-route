import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "./redux/operation";
import { isLogin } from "./redux/selector";
import { useNavigate } from "react-router-dom";

export const Home=()=>{
    const dispatch = useDispatch();
    const logined = useSelector(isLogin);
    const navigate = useNavigate();
    // .then(()=>{navigate('/contacts');})
    function handlerBtn(){
        !logined && dispatch(login({email: "ozeran@mail.com", password: "qweqwe123"})).then(()=>{navigate('/about');});
        logined && dispatch(logout());
    }

    return(
        <>
        <h2>Home</h2>
        <button onClick={handlerBtn}>{logined ? 'Logout':'Login'}</button>
        </>
    )
}