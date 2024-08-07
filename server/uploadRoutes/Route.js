const uploadimage = require("../uploadController/uploadController")
const router = require("express").Router()

router.post("/upload", uploadimage)

module.exports = router