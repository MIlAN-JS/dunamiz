import app from "./app.js"
import config from "./config/config.js"
import connectToDb from "./config/database.js"
import {createServer} from "http";
import { Server } from "socket.io";

const server = createServer(app);




//connecting to our database
connectToDb();
const port = config.PORT || 5000
// running our app 
server.listen(8000, ()=>{
    console.log("our app is running on port " + port)
})







