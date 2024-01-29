const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/mydb")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const user=new mongoose.model('users',userSchema)

module.exports=user