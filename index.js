// this is the actual server and entry point

// importing express...
const express = require("express")

// initializing express into an app variable
const app = express()

// port
const port = 2024


// importing database
const connectDb = require("./database/db")
// executing database function
connectDb()

// middleware
app.use(express.json())



// importing user route
const userRoute = require("./routes/userRoute")




// testing route
app.get("/api", (request, response) => {
    response.json({message: "Welcome to my server..."})
})


// using the user route
app.use("/api/user", userRoute)






























































// listening to port
app.listen(port, () => {
    console.log("Server connected successfully")
})