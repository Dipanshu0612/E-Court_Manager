const lawyerModel = require('../models/lawyer_model');

exports.verifyLawyer = async (req, res) => {
    const { lawyer_id, password } = req.body;
    console.log(lawyer_id, password);
    try {
        const user = await lawyerModel.findOne({ lawyer_id })
        if (user){
            if(user.password===password){
                res.status(200).json({ user, success:true, message:"Succesfully Logged In!" });
        }
        else{
            res.status(200).json({ success:false, message: 'Invalid password' });
        }
    }
    else{
        res.send({success:false, message: 'Lawyer not found!' });
    }
    } catch (error) {
        res.json({ error: error.message });
    }
};