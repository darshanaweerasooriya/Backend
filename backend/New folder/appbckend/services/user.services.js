const UserModel = require('../model/user.model')
const  jwt = require("jsonwebtoken");


class userService{
    static async registerUser(firstname,lastname,email,phonenumb,password){
        try{
            const createUser = new  UserModel({firstname,lastname,email,phonenumb,password});
            return await createUser.save();

        }catch(err){
            throw err;
        }

    }
    static async checkuser(email){
        try{
            return await UserModel.findOne({email})

        }catch (error){
            throw error
        }
    }

static async generateToken(tokenData,secretKey,jwt_expire){
    return jwt.sign(tokenData,secretKey,{expiresIn:jwt_expire});

}

static async verifyToken(token, secretKey){
    try {
        return jwt.verify(token, secretKey);
    } catch (error){
        throw error;
    }
}

static async updatePassword(email, newPassword) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(newPassword, salt);

        return await UserModel.findByIdAndUpdate({ email}, { password: hashPassword}, { new: true});

    } catch (error){
        throw error;
    }
}


static async getusetdata(email){
    const userdata = await UserModel.find({email})

    return userdata;
}

}

module.exports = userService;