const express = require('express');
// const { fetchBooks, addBook, deleteBook, editBook } = require('./controllers/bookController');
const bookRoute = require("./routes/bookRoute")
const cors = require ("cors");

const app = express();
require("./database/connect")
app.use(cors({
    origin : "*"
}))
 
app.use (express.json()) //json bata aako data express le bujna ko lagi


app.use("/api",bookRoute)

app.listen(3000, function(){
    console.log("node/backend project has started at port 3000")
})

