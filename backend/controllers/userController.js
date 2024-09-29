const userModel=require('../models/users_model');

exports.verifyUser = async (req, res) => {
    const { user_id, password } = req.body;
    console.log(user_id, password);
    try {
        const user = await userModel.findOne({ user_id })
        if (user){
            if(user.password===password){
                res.status(200).json({ user, success:true, message:"Succesfully Logged In!" });
        }
        else{
            res.status(200).json({ success:false, message: 'Invalid password' });
        }
    }
    else{
        res.send({success:false, message: 'User not found!' });
    }
    } catch (error) {
        res.json({ error: error.message });
    }
};
