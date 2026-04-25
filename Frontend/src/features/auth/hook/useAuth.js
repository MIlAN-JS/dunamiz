
import { useDispatch } from "react-redux";
import { loginStart , loginSuccess , loginFailure , logout , clearError } from "../state/authSlice.js";
import { getUser} from "../services/auth.services";
import { current } from "@reduxjs/toolkit";

const useAuth = ()=>{

 const dispatch = useDispatch()


    const handleGetUser =  async()=>{
        console.log("start")
        try {
        
            dispatch(loginStart());
            const user = await getUser()
            console.log(user)

            dispatch(loginSuccess({
                _id : user._id,
                name : user.name,
                email : user.email, 
                currentMatch :user.currentMatch
            })) 

            dispatch(clearError())
            
            
        } catch (error) {
            console.log("error", error)
            dispatch(loginFailure(error.message))
            
        }

        }


return {handleGetUser}

}


export default useAuth