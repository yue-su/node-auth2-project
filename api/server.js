const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const usersRouter = require("../users/user-router")

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use("/api", usersRouter)

server.get("/", (req, res) => {
  res.json({ api: "node-auth2-project" })
})



module.exports = server