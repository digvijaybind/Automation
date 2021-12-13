const ClassService=require("./services/class-service");

class ClassController{


    getClass =async(req,res,next) => {
        const { page = 1 , limit=5 } =req.query;
        const {id} =req.params;
        const data=await ClassService.getClass({_id:id}).limit(limit*1).skip((page-1)* limit);

         if(!data) return next(ErrorHandler.notFound("Student data not found"));


         res.json({
 
            success:true,
            message:'student data found',
            data:data

         });

    };

    updateStudent =async(req,res,next) => {


        const { page = 1 , limit=5 } =req.query;
        const _id=body.id;
        if(!Mongoose.isValidObjectId(_id))
            return next(ErrorHandler.badRequest("invalid student Id"));
            delete body.id;

            const data= await ClassService.updateClass({_id},body).limit(limit*1).skip((page-1)* limit);
            return !data.matchedCount
             ? next(ErrorHandler.serverError("Failed To Update"))
             : res.json({success:true,message:"student data updated"});

    };

    CreateStudent =async(req,res,next) => {

        const { page = 1 , limit=5 } =req.query;

         const body=req.body;
         const data =await ClassService.createClass(body).limit(limit*1).skip((page-1)*limit);
         if(!data) return next(ErrorHandler.serverError("failed to add student data"));
         res.json({ success:true,message:"student data successful added",data});


        };

        DeleteStudent=async(req,res,next) => {
            const { page = 1 , limit=5 } =req.query;
            const body=req.body;
            const _id=body.id;
            if(!Mongoose.isValidObjectId(_id))
            return next(ErrorHandler.badRequest("invalid student Id"));
            delete body.id;
             
            const data= await ClassService.deleteClass({_id},body).limit(limit*1);
            return !data.matchedCount
             ? next(ErrorHandler.serverError("Failed To Update"))
             : res.json({success:true,message:"student data deleted"});


        };







}


module.exports=new ClassController();
