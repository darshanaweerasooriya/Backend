const reviewmodel = require('../model/review.model')

class reviewservice{
    static async customerreview(comment){
        try{
            const createreview = new reviewmodel({comment})
            return await createreview.save();
        }catch(err){
            throw err;
        }
    }
}

module.exports = reviewservice;