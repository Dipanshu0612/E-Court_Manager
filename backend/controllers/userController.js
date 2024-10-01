const userModel = require("../models/users_model");
const caseModal = require("../models/case_model");

exports.verifyUser = async (req, res) => {
  const { user_id, password } = req.body;
  console.log(user_id, password);
  try {
    const user = await userModel.findOne({ user_id });
    if (user) {
      if (user.password === password) {
        res
          .status(200)
          .json({ user, success: true, message: "Succesfully Logged In!" });
      } else {
        res.status(200).json({ success: false, message: "Invalid password" });
      }
    } else {
      res.send({ success: false, message: "User not found!" });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

exports.getUserCases = async (req, res) => {
  const { user_id } = req.body;
  try {
    const user = await userModel.findOne({ user_id });
    if (user) {
      const cases = await caseModal.find({ user_id });
      res
        .status(200)
        .json({ cases, success: true, message: "Succesfully fetched cases!" });
    } else {
      res.send({ success: false, message: "User not found!" });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

exports.addCase = async (req, res) => {
  const { user_id, caseData } = req.body;
  try {
    const user = await userModel.findOne({ user_id });
    if (user) {
      const data = {
        case_id: "CASE" + Math.floor(Math.random() * 1000000),
        case_name: caseData.title,
        case_type: caseData.fileType,
        case_description: caseData.description,
        case_status: "Pending",
        case_date: new Date().toISOString,
        case_location: "",
        case_judge: "",
        case_lawyer: "",
        case_next_hearing_date: "",
        case_user_id:user_id
      };
      const result=await caseModal.create(data);
      console.log("Result: "+ result);
      if(result){
          res.json({ caseData, success: true, message: "Succesfully added case!" });
      }
      else{
        res.json({success:false, message:"Failed to file the case!"})
      }
    } else {
      res.send({ success: false, message: "User not found!" });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

exports.getUserHearing = async (req, res) => {
  const { user_id } = req.body;
  console.log(user_id);
  try {
    const user = await userModel.findOne({ user_id });
    if (user) {
      const cases = await caseModal.find({ user_id });
      res
        .status(200)
        .json({ cases, success: true, message: "Succesfully fetched cases!" });
    } else {
      res.send({ success: false, message: "User not found!" });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};
