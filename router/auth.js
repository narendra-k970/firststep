const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../userSchema');
const { default: mongoose } = require('mongoose');

router.get('/', (req, res) => {
    res.send(`Hello world from the router`);
});

router.post('/register', async (req, res) => {
    const {name, email,password,cpassword} = req.body;

      if(!name || !email || !password || !cpassword) {
        res.status(400).json({error:"Plz fill the empty field"});
      }

      try{
        const userExist = await User.findOne({ email: email});

        if(userExist){
           return res.status(400).json({error:"email already  Exist"});
        }
        const user = new User({name, email, password,cpassword});
        //bycript password
        
        await user.save();

        res.status(201).json({message:"user register successfully"});
      }catch(err){
        console.log(err);
      }
});


// giveway

// router.post('/giveway', async (req, res) => {
//   const {fname,lname,phone,address,state,zip,passport,ssn} = req.body;

//     if(!fname || !lname || !phone || !address || !state || !zip || !passport || !ssn) {
//       res.status(400).json({error:"Plz fill the empty field"});
//     }

//     try{
//       const userExist = await User.findOne({ phone: phone});

//       if(userExist){
//          return res.status(400).json({error:"user already  Exist"});
//       }
//       const user = new User({fname,lname,phone,address,state,zip,passport,ssn});
//       //bycript password
      
//       await user.save();

//       res.status(201).json({message:"register giveway user successfully"});
//     }catch(err){
//       console.log(err);
//     }
// });

// login  route

router.post('/signin', async(req, res) =>{
  const {email, password} = req.body;

try{
     if(!email || !password){
      return res.status(400).json({error:"PLz filled the data"})
     }

    const userLogin = await User.findOne({email:email});
    console.log(userLogin);
    res.json({message:"User Signin Successfully"});

   }catch(err){
      console.log(err);
   }
})



module.exports = router;


