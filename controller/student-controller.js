const StudentService=require("./service/student-service");
const ErrorHandler =require("../utils/error-handler");
const { Mongoose } = require("mongoose");

class StudentController {

//    const { page = 1 , limit=10 }=req.query;
    getStudent =async(req,res,next) => {

        const {id} =req.params;
        const data=await StudentService.getStudent({_id:id}).limit(limit*1).skip((page-1)*limit);

         if(!data) return next(ErrorHandler.notFound("Student data not found"));


         res.json({
 
            success:true,
            message:'student data found',
            data:data

         });

    };

    updateStudent =async(req,res,next) => {

        const{ page = 1 , limit=10 }=req.query;
        const body=req.body;
        const _id=body.id;
        if(!Mongoose.isValidObjectId(_id))
            return next(ErrorHandler.badRequest("invalid student Id"));
            delete body.id;

            const data= await StudentService.updateStudent({_id},body).limit(limit*1).skip((page-1)*limit);
            return !data.matchedCount
             ? next(ErrorHandler.serverError("Failed To Update"))
             : res.json({success:true,message:"student data updated"});

    };

    CreateStudent =async(req,res,next) => {
        const{ page = 1 , limit=10 }=req.query;

         const body=req.body;
         const data =await StudentService.createStudent(body).limit(limit*1).skip((page-1)*limit);
         if(!data) return next(ErrorHandler.serverError("failed to add student data"));
         res.json({ success:true,message:"student data successful added",data});


        };

        DeleteStudent=async(req,res,next) => {
            const{ page = 1 , limit=10 }=req.query;
            const body=req.body;
            const _id=body.id;
            if(!Mongoose.isValidObjectId(_id))
            return next(ErrorHandler.badRequest("invalid student Id"));
            delete body.id;
             
            const data= await StudentService.deleteStudent({_id},body).limit(limit*1).skip((page-1)*limit);
            return !data.matchedCount
             ? next(ErrorHandler.serverError("Failed To Update"))
             : res.json({success:true,message:"student data deleted"});


        };




}

module.exports=new StudentController();
