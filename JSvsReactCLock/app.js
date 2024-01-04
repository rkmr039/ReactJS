const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html");
});
app.listen(3030, () => {
    console.log("app running on 3030....")
});