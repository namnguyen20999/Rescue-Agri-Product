const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const User = require("../models/userModel")


router.post("/register", async (req, res) => {
    const {name , email , password} = req.body
    const newUser = new User({name, email, password})
    try {
        newUser.save(function (err) {
            console.log(err);
        });

        res.send('User registered successfully')
    } catch (error) {
        return res.status(400).json({message : error });
    }
});

router.get("/login/:loginEmail", async (req, res) => {
    try {
        const authUser = await User.find({email: req.params.loginEmail});
        res.send(authUser);
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
});

module.exports = router;