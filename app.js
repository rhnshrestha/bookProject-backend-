const express = require('express');
const { fetchBooks, addBook, deleteBook, editBook } = require('./controllers/bookController');
const bookRoute =require("./routes/bookRoute")

const app = express();
require("./database/connect")
app.use (express.json()) //json bata aako data express le bujna ko lagi


app.use("/api",bookRoute)
     

postgresql://postgres.cthegjamdgwfnhotfwlb:rhn@sql25@aws-0-ap-south-1.pooler.supabase.com:6543/postgres

app.listen(3000, function(){
    console.log("node/backend project has started at port 3000")
})

