const { request } = require("../app");
const productservice = require("../services/addproduct.service");
const productser = require("../services/addproduct.service");

exports.prodcutdetail =async(req,res,next)=>{
    try{
        const {id,ptitle,pprice,brand,category,tag,quantity,pdescription} = req.body;
         const successReq = await productser.addprodcutdetails(id,ptitle,pprice,brand,category,tag,quantity,pdescription);

         res.json({status:true,success:"Product Details added successfully "});

    }catch(error){
        throw error
    }
}


exports.getAllproducts = async (req, res, next) => {
    try {
        const products = await productservice.getAllproducts();
        res.json({status: true, products });
    }catch(error){
        next(error)
    }
}

exports.updateproduct = async (res, req, next) => {
    try {
        const { id } = req.params;
        const {ptitle,pprice,brand,category,tag,quantity,pdescription} = req.body;

        const updateproduct = await productser.updateproductdetails(id, {ptitle,pprice,brand,category,tag,quantity,pdescription});

        if (!updateproduct){
            return res.status(404).json({ status: false, error:"Product not found"});

        }
        res.json({ status: true, success:"Product details updatede successfully", updateproduct});

    }catch (error){
        next(error);
    }
}
 exports.deleteproduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteproduct = await productser.deleteproduct(id);

        if (!deleteproduct){
            return res.status(404).json({ status: false,error: "Product not found"});
        }
        res.json({ status: true, success: "Product delete successfully", deleteproduct});
    } catch (error){
        next (error);
    }
 }