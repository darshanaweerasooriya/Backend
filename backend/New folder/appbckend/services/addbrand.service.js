const brandmodel = require('../model/addbrand.model')

class brandservice{
    static async addbrandname(brand)
    {
        try{
            const createbrand = new brandmodel({brand})
            return await createbrand.save();
        }catch(err){
            throw err;
        }
    }
}

module.exports = brandservice;