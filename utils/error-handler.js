class ErrorHandler extends Error{


    constructor(statusCode,message){

        super(message);

        this.statusCode=statusCode;
        Error.captureStackTrace(this,this.constructor);

    }

    static serverError(message ="Internal Server Error"){

        return new ErrorHandler(500,message);
    }

    static notFound(message ="Not Found"){


        return ErrorHandler(404,message);
    }

    static badRequest(message ="Bad Request"){

        return new ErrorHandler(422,message);
    }
}


module.exports=ErrorHandler;
