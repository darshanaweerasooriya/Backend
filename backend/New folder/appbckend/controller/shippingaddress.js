const { request } = require("../app");
const shippingSer = require("../services/shippingaddress.service");

exports.shippingdetails = async(req,res,next)=>{

    try{
        const {country,firstname,lastname,address,apartment,city,state,zipcode} = req.body;

        const successReq = await shippingSer.shippingaddress(country,firstname,lastname,address,apartment,city,state,zipcode);

        res.json({status:true,success:"Shipping Details added successfully"});

    }catch(error){
        throw error
    }
}

exports.getshipping = async (req, res, next) => {
    try {
        const { firstname } = req.body;
        console.log("Request Body:", req.body); // Log the request body

        if (!firstname) {
            return res.status(400).json({ status: false, error: "Firstname is required" });
        }

        const shipping = await shippingSer.getshippingdetails(firstname);

        if (!shipping || shipping.length === 0) {
            return res.json({ status: false, error: "No shipping details found" });
        }

        res.json({ status: true, success: shipping });
    } catch (error) {
        console.error("Error in getshipping:", error); // Log the error
        next(error);
    }
};
