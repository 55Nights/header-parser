const express = require("express")
require("dotenv").config();

var app = express();
app.get("/", (req, res)=>{
    res.json({"message": "html"})
    console.log(req);
});
app.get("/api/whoami", (req, res)=>{
    res.json(req.headers)
})
app.listen(process.env.PORT || 3000,()=>{
    console.log('Your app is listening on port')
     
})