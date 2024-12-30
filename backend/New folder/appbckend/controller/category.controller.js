const { request } = require("../app");
const categoryService = require("../services/category.service");

exports.catdetails = async(req, res, next)=>{
    try{
        const{category} = req.body;

        const successReq = await categoryService.catname(category);

        res.json({status:true,success:"Category added sucessfully"});
    }catch(error){
        throw error
    }
}