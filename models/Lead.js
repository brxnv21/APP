import mongoose from 'mongoose';
const Schema = new mongoose.Schema({empresa:{type:String,required:true},nicho:{type:String,default:'Outro'},cidade:{type:String,default:''},whatsapp:{type:String,default:''},instagram:{type:String,default:''},status:{type:String,default:'Pendente'},observacao:{type:String,default:''},dataEnvio:{type:String,default:''},proximoContato:{type:String,default:''}},{timestamps:true});
export default mongoose.models.Lead || mongoose.model('Lead',Schema);
