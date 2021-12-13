const ClassModel=require("./model/class-model");

class ClassService{

    createClass=async(data) => {
 
        return await ClassModel.create(data);
   };
   
   
   getClass =async(filter) => await ClassModel.findOne(filter);
   
   
   deleteClass=async(filter) => {
       return await ClassModel.deleteOne(filter);
   
   };
   
   
   updateClass=async(filter,data) => {
       await ClassModel.updateOne(filter,data);
   };
   


}

module.exports=new ClassService();
