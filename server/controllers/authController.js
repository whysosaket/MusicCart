const dotenv = require("dotenv");
dotenv.config();

const jwt = require("jsonwebtoken");
const {User} = require("../Models/User");
const bcrypt = require("bcrypt");

const convertToTitleCase = require("../utils/makeTitleCase");
const isValidName = require("../utils/isValidName");
const isValidMobile = require("../utils/isValidMobile");
const isValidEmail = require("../utils/isValidEmail");

const JWT_SECRET = process.env.JWT_SECRET;

const createUser = async (req, res) => {
  let success = false;

  let {name, email, password, mobile} = req.body;
  name = name.toString().toLowerCase();
  email = email.toString().toLowerCase();
  mobile = mobile.toString().toLowerCase();

  try{

    if(!isValidName(name)){
      return res.json({success, error: "Name is not valid!"});
    }else{
      name = convertToTitleCase(name);
    }

    if (!isValidEmail(email)) {
      return res.json({success, error: "Email Address is not valid!"});
    } 

    if(!isValidMobile(mobile)){
      return res.json({success, error: "Phone Number is not valid!"});
    }

    let user = await User.findOne({email: email});
    if(user){
      return res.json({success, error: "Email Address is already registered!"});
    }

    user = await User.findOne({mobile: mobile});
    if(user){
      return res.json({success, error: "Mobile Number is already registered!"});
    }

    if(password.length < 6){
      return res.json({success, error: "Password must be at least 6 characters long!"});
    }

    const securedPassword = await bcrypt.hash(password.toString(), 10);

    const newUser = await User.create({
      name,
      email,
      mobile,
      password: securedPassword
    });
    const data={
      user:{
          id:newUser.id
      }
    }

    success = true;
    return res.json({ success, info: "Account Created Successfully!!" });
  } catch (error) {
    console.log(error);
    return res.json({ error: "Something Went Wrong!" });
    
  }
};

const loginUser = async (req, res) => {
  let success = false;
  let { login, password } = req.body;
  login = login.toString().toLowerCase();
  console.log(login, password);
  try {
    let emailCheck = await User.findOne({ email: login });
    let mobileCheck = await User.findOne({ mobile: login });
    if (!emailCheck && !mobileCheck) {
      return res.json({ success, error: "Invalid Credentials!" });
    }

    let user = emailCheck ? emailCheck : mobileCheck;

    if (!user) {
      return res.json({ success, error: "Invalid Credentials!" });
    }

    const passwordCheck = await bcrypt.compare(password.toString(), user.password);

    if (!passwordCheck) {
      return res.json({ success, error: "Invalid Credentials!" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET);

    success = true;
    return res.json({ success, info:"Login Success", token, data: user });
  } catch (error) {
    console.log(error);
    return res.json({ error: "Something Went Wrong!" });
  }
};

module.exports = { createUser, loginUser };