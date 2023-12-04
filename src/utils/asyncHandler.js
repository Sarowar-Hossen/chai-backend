
const asyncHandler = (requestHandler) => {
   return (req, res, next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((error)=>next(error))
    }
}

export {asyncHandler}
















// const asyncHandler = (requestHandler) =>async(req,res,next)=>{
//     try {
//          requestHandler=(req,res,next)=>{}
//     } catch (error) {
//         res.status(error.code).json({
//             success: false,
//             message: error.message
//         })
//     }
// }