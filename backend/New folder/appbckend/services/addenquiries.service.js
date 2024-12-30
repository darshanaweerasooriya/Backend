const enquiriesModel = require("../model/addenquiries.models")

class enquiriesService {
    static async addenquiries(name,mobilenum,email,comment,status){
        try{
            const createenquiries = new enquiriesModel({name,mobilenum,email,comment,status})
            return await createenquiries.save();
        }catch(err){
            throw err;
        }
    }

    static async getalldetails(){
        try{
            const title = await enquiriesModel.find();
            return title
        }catch (err){
            throw err;
        }
    }
}

module.exports = enquiriesService;