const postingmodel = require('../model/posting.model')

class postingservice{
    static async postingblog(title,cat,description){
        try{
            const createposting = new postingmodel({title,cat,description})
            return await createposting.save();
        }catch(err){
            throw err;
        }
    }

    static async getAllposts(){
        try{
            const blogpost = await postingmodel.find();
            return blogpost
        } catch (err){
            throw err;
        }
    }

   
}

module.exports = postingservice;