const mongoose=require('mongoose');

const judgeSchema = new mongoose.Schema({
    judge_id:String,
    judge_name:String,
    password:String,
    cases:Array
});

const myDB=mongoose.connection.useDb('users_db')
const JudgeModel = myDB.model('judges',judgeSchema);

module.exports = JudgeModel;

