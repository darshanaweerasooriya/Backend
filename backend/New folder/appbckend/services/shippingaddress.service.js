const shippingmodel = require('../model/shippingaddress.model')


class shippingSer{
    static async shippingaddress(country,firstname,lastname,address,apartment,city,state,zipcode){
        try{
            const createaddress = new shippingmodel({country,firstname,lastname,address,apartment,city,state,zipcode})
            return await createaddress.save();
        }catch(err){
            throw err;
        }
    }

    static async getshippingdetails(firstname){
        const shippingdata = await shippingmodel.find({firstname})

        return shippingdata;
    }


}



module.exports = shippingSer;