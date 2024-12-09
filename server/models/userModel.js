import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    verifyOtp:{type:String,default:''},
    verifyOtpExpireAt:{type:Number,default:0},
    isAccountVerified:{type:Number,default: false},
    resetOtp:{type:String,default:''},
    resetOtpExpiredAlt:{type:Number,default:0},

})
const userModel = mongoose.models.user || mongoose.model('user',userSchema)
export default userModel;