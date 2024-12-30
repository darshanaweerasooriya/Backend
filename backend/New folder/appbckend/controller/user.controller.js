const { request } = require("../app");
const userService = require("../services/user.services");

exports.register = async(req,res,next)=>{
    try{
        const {firstname,lastname,email,phonenumb,password} = req.body;

        const successReq = await userService.registerUser(firstname,lastname,email,phonenumb,password);

        res.json({status:true,success:"User Registration Successfully"});

    }catch(error){
        throw error
    }
}

exports.login = async(req,res,next)=>{
    try{
        const {email,password} = req.body;
       

        const user = await userService.checkuser(email);
       

        if(!user){
            throw new Error('User does not exist');
        }

        const isMatch = await user.comparePassword(password);

        if(isMatch == false){
            throw new Error("Invalid Password");
        }
        let tokenData = {_id:user._id,email:user.email};

        const token = await userService.generateToken(tokenData,"secretKey",'1')

        res.status(200).json({status:true,token:token})

        
    }catch(error){
        throw error
    }


}

exports.getuser = async (req,res,next)=>{
    try{
        const {email} = req.body;

        let userdetail = await userService.getusetdata(email);

        res.json({status:true,success:userdetail});
    }catch (error){
        next(error);
    }
}

exports.forgotpassword = async (req, res, next) => {
    try {
        const { email } = req.body;

        const user = await userService.checkuser(email);

        if (!user){
            throw new Error("User does not exist");
        }

        const resetToken = await userService.generateToken({_id: user._id, email: user.email}, "secretKey", "1h");

        console.log('Reset Password Link : http://localhost:3000/reset-password/${resetToken}');

        res.json({ status: true, message: "Password reset link sent to email"});
    }catch (error){
        next(error);
    }
};

exports.resetPassword = async (req,res,next) =>{
    try{
        const { token, newPassword } = req.body;

        if (!decoded){
            throw new Error("Invalid or expired token");

        }

        await userService.updatePassword(decoded.email, newPassword);

        res.json({ status: true, message: "Password reser successfully"});
    }catch (error){
        next(error);
    }
}
