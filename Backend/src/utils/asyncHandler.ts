

const asyncHandler = (requestHandler : any) =>{
    return (req:any , res:any , next:any)=>{
        Promise.resolve(requestHandler(req , res ,next)).catch(error=>{
            console.log(error)
            next(error)
        })
    }
}







export default asyncHandler;





// a function that takes in an async function and returns a new function that wraps the async function in a try-catch block. This is useful for handling errors in async functions without having to write try-catch blocks in every route handler.


// const asyncHandler = (func: Function) => async( req , res , next)=>{
//     try {

//         await func(req ,res ,next)
        
//     } catch (error) {
//         res.status(error.status || 500).json({
//             success : false,
//             message : error.message
//         })
        
//     }
// }