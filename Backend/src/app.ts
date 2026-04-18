import express from "express"
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/test" , (req, res)=>{
    res.send("Welcome to our API")
});



export default app;