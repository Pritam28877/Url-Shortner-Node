const express = require("express");
const urlRoute = require("./router/urlRoutes");
const URL = require("./model/url")
const db = require ('./config/mongodb')
const app = express();
const port = 5000 ;


app.use(express.json());

app.get('/',(req , res)=>{
    res.send("hello");
})
app.use("/url", urlRoute)

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