const express = require("express")
const morgan = require("morgan")
const app = express();



const requestLogger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} from ${req.ip}`);
    next(); // Move to the next middleware or route handler
};

app.use(requestLogger);

app.use(morgan('combined'));

app.get("/login",(req,res,next)=>{
    res.send("Login api has been called")
})

app.listen(8080,()=>{
    console.log("server is up at port no 8080");
})