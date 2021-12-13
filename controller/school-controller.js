const SchoolService=require("./service/school-service");

class SchoolController{

    CreateSchool =async(req,res,next) => {

        const { page = 1 , limit=1 } =req.query;

         const body=req.body;
         const data =await ClassService.createClass(body).limit(limit*1).skip((page-1)*limit);
         if(!data) return next(ErrorHandler.serverError("failed to add school data"));
         res.json({ success:true,message:"school data successful added",data});


        };
}

module.exports=new SchoolController();
