const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const JobRoutes=require('./routes/jobRoutes')

const app=express();
const port=process.env.port || 3000;

//middleware
app.use(bodyParser.json());  //working with json

mongoose.connect('mongodb://127.0.0.1:27017/Jobs',
    {useNewUrlParser:true,useUnifiedTopology:true})
    
.then(()=>{
    console.log("connected to db")
})
.catch((err)=>{
    console.log("error connecting to db",err)
})

app.use('/admin',JobRoutes)


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
