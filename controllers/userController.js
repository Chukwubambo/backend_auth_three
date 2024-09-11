// user controllers defined here


const User = require("../models/userModel")
const bcrypt = require("bcrypt")

const registerUser = async (request, response) => {

    const {firstName, lastName, email, phone, password} = request.body

    const userExists = await User.findOne({email})
    if (userExists) {
       return response.status(400).json({error : "User already exists..."})
    } 

    const newUser = await User.create({firstName, lastName, email, phone, password})
    if (newUser) {
        response.status(201).json({messages : "User successfully registered"})
    } else{
        response.status(400).json({error : "Invalid user data"})
    }
}


// Login User Function
const loginUser = async (request, response) => {
    const { email, password } = request.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return response.status(400).json({ error: "User not found" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return response.status(400).json({ error: "Invalid credentials" });
        }

        // Successful login
        response.status(200).json({ message: "Login successful" });

    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Server error, please try again later" });
    }
};











module.exports = {registerUser, loginUser}