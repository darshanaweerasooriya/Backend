const { request } = require("../app");
const brandservice = require("../services/addbrand.service");

exports.branddetails = async(req, res, next)=> {
    try{
        const{brand} = req.body;

        const successReq = await brandservice.addbrandname(brand);

        res.json({status:true,success:"Brand added sucessfully"});
    }catch(error){
        throw error
    }
}