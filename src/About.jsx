import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "./redux/operation";
import { isLogin, isUser } from "./redux/selector";



export const About=()=>{
    const dispatch = useDispatch();
    const logined = useSelector(isLogin);
    const user = useSelector(isUser);
    function handlerBtn(){
        !logined && dispatch(login({email: "ozeran@mail.com", password: "qweqwe123"}));
        logined && dispatch(logout());
    }

    return(
        <>
        <h2>About</h2><span>User: {user.name}</span><br/>
        <button onClick={handlerBtn}>{logined ? 'Logout':'Login'}</button>
        </>
    )
}