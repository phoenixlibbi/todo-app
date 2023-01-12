const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});
const app=require('./app');

const DB=process.env.DATABASE;

mongoose.connect(DB).then(()=>{
    console.log("DB connected successfully!");
})
mongoose.set('strictQuery', true);
const port=process.env.PORT;

app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
})