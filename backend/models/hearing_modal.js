const mongoose=require('mongoose');

const hearingSchema = new mongoose.Schema({
    "user_id":"",
    "case_id":"",
    "case_name":"",
    "case_status":"",
    "case_date":"",
    "case_time":"",
    "case_location":"",
    "case_judge":"",
    "case_lawyer":"",
});

const myDB=mongoose.connection.useDb('hearings_db')
const hearingModel = myDB.model('all_hearings',hearingSchema);

module.exports = hearingModel;