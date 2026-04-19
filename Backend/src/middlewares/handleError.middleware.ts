import e from "express"

const errorHandler = (err : any, req : any, res : any, next : any) =>  {
    console.log(err)

    res.status(err.status || 500).json({
        success: false,
        message: err.message
    })
}

export default errorHandler;