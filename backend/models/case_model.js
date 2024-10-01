const mongoose=require('mongoose');

const caseSchema = new mongoose.Schema({
    case_id:String,
    case_name:String,
    case_type:String,
    case_description:String,
    case_status:String,
    case_date:String,
    case_time:String,
    case_location:String,
    case_judge:String,
    case_lawyer:String,
    case_next_hearing_date:String,
    case_user_id:String
});

const myDB=mongoose.connection.useDb('cases_db')
const caseModel = myDB.model('all_cases',caseSchema);

module.exports = caseModel;