import mongoose from "mongoose";

const Connection=async()=>{
    
const URL = 'mongodb://localhost:27017/e_commerce_app';
try{

await mongoose.connect(URL , {useNewUrlParser: true , useUnifiedTopology: true})
console.log('Connection successful with database')
 } catch(error){
     console.log(`Error while connecting to Mongodb , ${error}`)
}
}


export default Connection;