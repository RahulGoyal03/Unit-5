const express = require("express")

const mongoose = require("mongoose")

const app = express()

app.use(express.json())

const connect = () => {
  return  mongoose.connect("mongodb+srv://AnkitMishra07:ankit07@cluster0.jxwud.mongodb.net/userdataa")
}

const User = require("./user.model")


app.get("/users",async (req, res) => {
    const user = await User.find().lean().exec()
    return res.status(201).send({user})
})

app.post("/users",async (req, res) => {
    try{
        const user = await User.create(req.body)
        return res.status(201).send(user)

    }catch(e) {
        return res.status(500).json({status: "Failed", message : e.message})
    }
})

app.listen(5000,async () => {
    await connect()
    console.log("Listening on PORT 5000")
})