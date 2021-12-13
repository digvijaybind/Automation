const mongoose=require("mongoose");

const Schema =mongoose.Schema;

const StudentSchema=new Schema({
 
    name:{

        type:String,
        required:true,
    },
    rollNo:{


        type:Number,
        required:true,

    },

    classId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Class'
    }
    
  

   
})

module.exports=mongoose.model('Student',StudentSchema);
