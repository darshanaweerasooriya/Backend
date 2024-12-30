const { request } = require("../app");
const postingservice = require('../services/posting.service');

exports.postposting = async (req, res, next) => {
    try {
        const {title,cat, description} = req.body;
        const postsuccess = await postingservice.postingblog(title,cat, description);

        res.json({status:true,success:"Posting Successfully" });

    } catch (err) {
        throw(err); // Pass the error to the error handling middleware
    }
}


exports.getAllpost = async (req, res, next)=>{
    try{
        const posts = await postingservice.getAllposts();
        res.json({status: true,posts });
    }catch(error){
        next(error)
    }
}
