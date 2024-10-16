const mongoose=require('mongoose');

const JobSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    jobId:{
        type:Number,
        required:true
    }
    
},{
    timestamps:true
})

module.exports=mongoose.model('Job',JobSchema);