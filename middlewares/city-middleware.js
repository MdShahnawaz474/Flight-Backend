const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/appError");

const validateCreateRequest = (req,res,next)=>{
    if(!req.body.name){
        ErrorResponse.message= "Something went wrong while creating city";
        ErrorResponse.error= new AppError(["City name not found in the incoming request"]);
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports={validateCreateRequest};