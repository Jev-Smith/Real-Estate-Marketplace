import User from '../models/user.model.js'
import bcrypt from 'bcryptjs';

const signup = async (req, res) => {
    const {username, password, email} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({username, password: hashedPassword, email});
    await newUser.save();

    res.status(201).json({message: "User successfully created"});
};

export default {signup};