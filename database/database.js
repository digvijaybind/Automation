const mongoose=require("mongoose");

mongoose 
      .connect(
        "mongodb+srv://digsu:digsu123@cluster0.1dajg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
      )
      .then( () => console.log("connected succesfully ..."))
      .catch( (err) => console.log("connection failed"+err));



module.exports=mongoose;