const StudentModel=require("./student/student-model");

class StudentService{

   
createStudent =async(data) => {
 
     return await StudentModel.create(data);
};


getStudent =async(filter) => await StudentModel.findOne(filter);


deleteStudent=async(filter) => {
    return await StudentModel.deleteOne(filter);

};


updateStudent=async(filter,data) => {
    await StudentModel.updateOne(filter,data);
};


}


module.exports=new StudentService();
