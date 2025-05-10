const { books } = require("../database/connect");

exports.fetchBooks = async (req,res)=>{
    
   const data = await books.findAll();  //select * from book; //await rakhna ko lagi async compulsory chainxa //findAll() le chai jaile data lai array ko form ma display garai dinxa

    res.json({
        message:"books fetched successfully",
        information : data
    })
}

exports.addBook = async (req, res)=>{
    
    const {bookName, bookPrice, bookAuthor, bookGenre} = req.body
    await  books.create({
        bookName, //column name = value name, //key ra value ko naam same vayo vani euta matra lekhey ni hunxa 
        bookPrice : bookPrice,
        bookAuthor : bookAuthor,
        bookGenre : bookGenre

    })

    res.json({
        message:"book added successfully"
    })
}

exports.deleteBook = async function(req, res){
    // logic to delete the book

    const id = req.params.id;
   await books.destroy({
        where : {
           id : id // id matra lekhda ni hunxa, kina ki key ra value ko naam same xa
        }
    });

    res.json({
        message:"book deleted successfully"
    })
}

exports.editBook = async function (req, res){

    const id = req.params.id;
    const {bookName, bookPrice, bookAuthor,bookGenre} = req.body
    await books.update({bookName , bookPrice, bookAuthor, bookGenre },//bookName : bookName grya
    {  where : {
                        id : id
                    } } )

    res.json({
        message: "book updated successfully"
    })
}


exports.singleFetchBook = async function(req,res){
   const id = req.params.id
  const datas = await books.findByPk(id)
  res.json({
    message : "Single Book Fetched" ,
    info : datas 
  })
}

// module.exports = {fetchBook, addBook, deleteBook, editBook} yesari ni export grna milxa natra mathi chai exports. use gareko xa