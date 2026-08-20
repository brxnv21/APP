import mongoose from 'mongoose';
const Schema = new mongoose.Schema({nome:{type:String,required:true},cliente:{type:String,default:''},plataforma:{type:String,default:'Meta Ads'},orcamento:{type:String,default:''},status:{type:String,default:'Ativa'}},{timestamps:true});
export default mongoose.models.Campanha || mongoose.model('Campanha',Schema);
