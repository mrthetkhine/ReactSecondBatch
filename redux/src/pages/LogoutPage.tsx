import {useAppDispatch} from "../app/hooks";
import {logout} from './../features/auth/authSlice';
export default function LogoutPage()
{
    let dispatch = useAppDispatch();
    let logoutHandler = ()=>{
        console.log("Logout ");
        dispatch(logout());
    }
    return (<div>
        <button className="btn btn-primary"
            onClick={logoutHandler}>Logout
        </button>
    </div>);
}