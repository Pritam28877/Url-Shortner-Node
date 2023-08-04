const express = require("express");
const urlRoute = require("./router/urlRoutes");
const app = express();
const port = 5000 ;

app.get('/',(req , res)=>{
    res.send("hello");
})
app.use("/url", urlRoute)
app.listen(port , (e)=>{
    if(e){
        return console.log("the error :" + e);
    }
    console.log(`server is running on port ${port}`)
})