import axios from "axios"

const api = axios.create({
    baseURL : "http://localhost:3000", 
    withCredentials : true
})


 const getUser  = async () => {
    try {
         const response = await api.get("/get-user")
        return response.data
}catch (error) {

    return error
        
    }
}
   
 const googleLogin =  ()=>{
    window.location.href = "http://localhost:3000/auth/google";
}

export { 
    getUser ,
    googleLogin,

}