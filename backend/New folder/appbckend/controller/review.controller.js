const { request } = require('../app');
const reviewService = require('../services/review.service');

exports.reviewdetails = async(req,res,next) => {
    try{
        const {comment} = req.body;
        
        const successReq = await reviewService.customerreview(comment);


        res.json({status:true, success:"Review Details added"});
    }catch(error){
        throw error
    }
}