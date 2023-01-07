const bcrypt = require('bcrypt');
const User = require('../models/User')


async function hi(req, res) { 
    try {
        console.log("hi")
        res.status(201).json({msg: 'hi'});

    } catch(err) {
        res.status(500).json({err: "This email "});
    }
}
    

async function registerUser(req, res) { 
    try {
        console.log("req.body")
        const users = await User.findUsersByEmail(req.body.email)
        console.log(users)
        if(!users.length){
            console.log(req.body)
            const salt = await bcrypt.genSalt();
            const hashed = await bcrypt.hash(req.body.password, salt);
            console.log(hashed)
            let newUser = await User.create({...req.body, password: hashed});
            await User.updateLoginDate(newUser.id)
            res.status(201).json({msg: 'User created', user: {newUser}});
        }else {
            throw new Error
        }
    } catch (err) {
        res.status(500).json({err: "This email is already in use, please either login with this email or register with a different one"});
    }
}

async function loginUser (req, res) {
    try {
        const user = await User.findUsersByEmail(req.body.email)
        let authed
        if(user.length === 1){
            authed = bcrypt.compare(req.body.password, user[0].password_digest)
            person = user[0]
        }
        if(authed){
            await User.updateLoginDate(person.id)
            res.status(200).json({msg: 'Logged in', person: user})
        } else {
            throw new Error('User could not be authenticated')  
        }
    } catch (err) {
        res.status(403).json({ err });
    }
}

module.exports = {registerUser, loginUser, hi}