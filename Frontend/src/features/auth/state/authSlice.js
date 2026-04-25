import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null , 
    error : null, 
    loading : true , 
    success : false,
    isAuthenticated : false
}


const authSlice = createSlice ({
    name : "auth", 
    initialState,
    reducers : {

        //login start

         loginStart :  (state , action)=>{

            state.loading = true 
            state.error = null
            

        },

    //loginSuccess 
        loginSuccess : (state , action)=>{
            state.loading = false
            state.user = action.payload
            state.isAuthenticated = true
            state.error = null
        },

        //login failure

        loginFailure : (state , action)=>{
            state.loading = false
            state.user = null
            state.isAuthenticated = false
            state.error = action.payload
        },
       



        //logout

       logout : (state , action)=>{
        state.loading = false,
        state.user = null
        state.isAuthenticated = false
       },


        // clear Error

        clearError : (state , action)=>{
            state.error = null
        }
    }

})


export const {loginStart , loginSuccess , loginFailure , logout , clearError} = authSlice.actions
export default authSlice.reducer