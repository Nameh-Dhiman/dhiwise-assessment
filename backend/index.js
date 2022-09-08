const express = require('express');
const cors = require('cors');
const DataModel = require("./model/DataModel");
const connection = require("./database/db");
const app =  express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin:"*",
}));


app.get("/", async(req, res) => {
    try{
        const data = await DataModel.find();
        return res.status(200).json(data);
    }catch(err){
        return res.status(503).send("Interal Server Error");
    }
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, async(req, res) => {
    console.log("Server listening on port " + PORT);
    try{
        await connection ;
        console.log("Connected to DB");
    }catch(err){
        console.log("Server Error!");
    }
});