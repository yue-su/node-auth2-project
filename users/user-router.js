const router = require("express").Router()
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const Users = require("./user-model.js")

router.get("/users", (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json({ data: users, jwt: req.jwt })
    })
    .catch((err) => res.send(err))
})

router.post("/register", (req, res) => {
    const credentials = req.body

    if(isValid(credentials))

})


function isValid(user) {
  return Boolean(
    user.username && user.password && typeof user.password === "string"
  )
}


module.exports = router
