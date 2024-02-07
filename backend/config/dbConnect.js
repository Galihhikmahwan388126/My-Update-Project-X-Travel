const {default:mongoose} = require("mongoose");

const dbConnect = ()=> {
    try{
        const conn = mongoose.connect("mongodb://atlas-sql-6472cf03acbb003ef52aefeb-r80s7.a.query.mongodb.net/sample_airbnb?ssl=true&authSource=admin");
        console.log("Database is connected and successfully");
    }catch (error) {
        console.log("")
    }
}
