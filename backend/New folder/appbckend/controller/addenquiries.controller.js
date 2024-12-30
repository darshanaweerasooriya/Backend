const { request } = require("../app");
const enquiriesService = require("../services/addenquiries.service");

exports.sendenquiries = async(req,res,next)=>{
    try{
        const {name,mobilenum,email,comment,status} = req.body;
        const successReq = await enquiriesService.addenquiries(name,mobilenum,email,comment,status);

        res.json({status:true,success:"Enquiries Details added successfully "});
    }catch(error){
        throw error
    }
}

exports.getalldetails = async (req, res, next) =>
{
    try{
        const enquiries = await enquiriesService.getalldetails()
        res.json({statue: true, enquiries})
       }catch(error){
        next (error)
       }
}