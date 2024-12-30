const catdmodel = require('../model/category.model')

class categoryService {
    static async catname(category)
    {
        try{
            const createCategory = new catdmodel({category})
            return await createCategory.save();
        }catch(err){
            throw err;
        }
    }

}

module.exports = categoryService;