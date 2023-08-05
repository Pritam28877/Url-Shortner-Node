const express = require("express");
const urlRoute = require("./router/urlRoutes");
const URL = require("./model/url")
const db = require ('./config/mongodb')
const app = express();
const port = 5000 ;

// middleware for the project in the projecet 
app.use(express.json());


// the route and the send the responce 
app.get('/',(req , res)=>{
    res.send("hello");
})
app.use("/url", urlRoute)


// the logic to redirect the given shot url and the tampstap
app.get('/:shortId',async(req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {shortId} , {
            $push :{
                visiteHistory :{
                    timestap : Date.now(),
                }
            }
        });
        res.redirect(entry.redirectUrl);
})
app.listen(port , (e)=>{
    if(e){
        return console.log("the error :" + e);
    }
    console.log(`server is running on port ${port}`)
})