class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something went to wrong",
        errors = [],
        stack = ''
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors
        if(stack){
            this.stack = stack // error - - here this stack and statck is not same next time solve the problem
        }else{
          Error.captureStackTrace(this,this.constructor)  
        }
    }
}

export {ApiError}