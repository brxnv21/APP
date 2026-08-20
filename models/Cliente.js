import mongoose from 'mongoose';
const Schema = new mongoose.Schema({empresa:{type:String,required:true},responsavel:{type:String,default:''},whatsapp:{type:String,default:''},instagram:{type:String,default:''},plano:{type:String,default:'Essencial'},valor:{type:String,default:''},status:{type:String,default:'Ativo'}},{timestamps:true});
export default mongoose.models.Cliente || mongoose.model('Cliente',Schema);
