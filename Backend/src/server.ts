import app from "./app.js"
import config from "./config/config.js"
import connectToDb from "./config/database.js"









//connecting to our database
connectToDb();

// running our app 
app.listen(config.PORT, ()=>{
    console.log("our app is running on port " + config.PORT)
})







