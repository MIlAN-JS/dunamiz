import axios from "axios"

const api = axios.create({
    baseURL : "http://localhost:3000/auth", 
    withCredentials : true
})


    const getUser  = async () => {
        try {
            const response = await api.get("/get-user")
            return response.data.user
            
    }catch (error) {

      throw error
            
        }
    }
   
 const googleLogin =  ()=>{
    window.location.href = "http://localhost:3000/auth/google";
}

export { 
    getUser ,
    googleLogin,

}