const judgeModel = require('../models/judge_model');

exports.verifyJudge = async (req, res) => {
    const { judge_id, password } = req.body;
    console.log(judge_id, password);
    try {
        const user = await judgeModel.findOne({ judge_id })
        if (user){
            if(user.password===password){
                res.status(200).json({ user, success:true, message:"Succesfully Logged In!" });
        }
        else{
            res.status(200).json({ success:false, message: 'Invalid password' });
        }
    }
    else{
        res.send({success:false, message: 'Judge not found!' });
    }
    } catch (error) {
        res.json({ error: error.message });
    }
};