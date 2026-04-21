import jwt from "jsonwebtoken"
import config from "../config/config.js"



const checkUser = (req:any, res:any, next:any) => {

   
    try {
         // get token from cookie
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        })
    }

    // verify the token and get the user data

        const decoded = jwt.verify(token , config.JWT_SECRET) 
        console.log("decoded is " , decoded)
        req.user = decoded

        next()
        
    } catch (error) {
        next(error)
    }
     
    // const user = verifyToken(token)

}


export {checkUser}