
import { useSelector } from "react-redux";
import { Navigate , Outlet, useLocation } from "react-router-dom";

const PrivateRoute = ()=>{

const user = useSelector(state => state.auth.user)
const loading = useSelector(state => state.auth.loading)
const location = useLocation()

  
    if(loading){
       return <h1>Loading....</h1>
    }

    if(!user || user === null){
        return <Navigate to="/login" state={{from : location}} replace/>
    }

    return <Outlet/>
}

export default PrivateRoute