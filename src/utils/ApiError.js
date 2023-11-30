class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something went to wrong",
        errors = [],
        statck = ''
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors
        if(statck){
            this.stack = statck // error - - here this stack and statck is not same next time solve the problem
        }else{
          Error.captureStackTrace(this,this.constructor)  
        }
    }
}