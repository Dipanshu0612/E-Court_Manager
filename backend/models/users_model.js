const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    user_id:String,
    user_name:String,
    password:String,
    cases:Array
});

const myDB=mongoose.connection.useDb('users_db')
const userModel = myDB.model('users',userSchema);

module.exports = userModel;