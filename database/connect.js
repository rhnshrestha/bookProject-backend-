const {Sequelize, DataTypes} = require ("sequelize");
// const sequelize =new Sequelize("postgresql://postgres.cthegjamdgwfnhotfwlb:rhn@sql25@aws-0-ap-south-1.pooler.supabase.com:6543/postgres");
//sq = sequelize (basically Sequelize vanney class lai instantiate gareko )


const sequelize = new Sequelize("books", "root", "!rhn@sql25", {
  host: "localhost",
  dialect: "mysql",
  port: 3306, // default MySQL port
});

sequelize.authenticate()
.then(()=>{
    console.log("authenticate vayo, connect vayo");
})
.catch((err)=>{
    console.log("error aayo" + err);
})

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.books = require("./models/book.model") (sequelize, DataTypes);
db.users = require ("./models/user.model") (sequelize, DataTypes);
db.products = require ("./models/product.model") (sequelize, DataTypes);

//yesle supabase ma lagera tables haru rakhdinxa / migrate grdinxa
sequelize.sync({alter:false}).then(()=>{
    console.log("migrate vayo hai ta 🚀");
})
module.exports = db;
                                                     