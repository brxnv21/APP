import mongoose from 'mongoose';
const Schema = new mongoose.Schema({tipo:{type:String,default:'Entrada'},data:{type:String,default:''},valor:{type:Number,default:0},descricao:{type:String,default:''},metodo:{type:String,default:'PIX'},categoria:{type:String,default:'Serviço'}},{timestamps:true});
export default mongoose.models.Financa || mongoose.model('Financa',Schema);
