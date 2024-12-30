const productmodel = require('../model/addproduct.models')


class productservice {
    static async addprodcutdetails(id,ptitle,pprice,brand,category,tag,quantity,pdescription){
        try {
            const createprodcut = new productmodel({id,ptitle,pprice,brand,category,tag,quantity,pdescription})
            return await createprodcut.save();
        }catch(err){
            throw err;
        }
    }

    static async getAllproducts() {
        try {
            const products = await productmodel.find();
            return products
        } catch (err){
            throw err;
        }
    }

    static async updateproductdetails (id, updateData){
        try{
            return await productmodel.findByIdAndUpdate(id, updateData, {new: true});

        }catch (err){
            throw err;
        }
    }

    static async deleteproduct(id){
        try{
            return await productmodel.findByIdAndDelete(id);
        }catch (err){
            throw err;
        }
    }
}

module.exports = productservice;