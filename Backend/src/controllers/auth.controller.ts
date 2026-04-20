import type{ Request , Response } from "express";


const googleCallback = (req: Request, res: Response) => {
    console.log(req.user)

    res.json({
        message: "Google authentication successful",
        user: req.user
    })
}


export {
    googleCallback
}