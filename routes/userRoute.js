// User endpoint and links

const express = require ("express")
const { registerUser, loginUser } =require("../controllers/userController")

const router = express.Router()

router.post("/register", registerUser)  // Registration route
router.post('/login', loginUser);       // Login route









module.exports = router