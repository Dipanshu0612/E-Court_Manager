const mongoose=require('mongoose');

const lawyerSchema = new mongoose.Schema({
    lawyer_id:String,
    lawyer_name:String,
    password:String,
    cases:Array
});

const myDB=mongoose.connection.useDb('users_db')
const LawyerModel = myDB.model('lawyers',lawyerSchema);

module.exports = LawyerModel;

