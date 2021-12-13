const mongoose=require("mongoose");

const Schema =mongoose.Schema;


const ClassSchema= new Schema({

    schoolId:{
        type:SchemaType.ObjectId,
        ref:'School'
    },

    name:{
        type:String,
        required:true
    }


})

export default mongoose.model('Class',ClassSchema);
