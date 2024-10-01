exports.verifyAdmin = async (req, res) => {
    const { admin_id, password } = req.body;
    try {
            if(password===process.env.ADMIN_PASSWORD && admin_id==="admin@ecourt"){
                res.status(200).json({success:true, message:"Succesfully Logged In!" });
            }
        else{
            res.status(200).json({ success:false, message: 'Invalid password' });
        }
    } catch (error) {
        res.json({ error: error.message });
    }
};