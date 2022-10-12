import {Schema,model} from 'mongoose'


const UserSchema = new Schema({
  username : String,
  record: Number,
})

export default model('User',UserSchema);