const express = require("express");
const app = express();
const port = 5000 ;

app.get('/',(req , res)=>{
    res.send("hello");
})
app.listen(port , (e)=>{
    if(e){
        return console.log("the error :" + e);
    }
    console.log(`server is running on port ${port}`)
})