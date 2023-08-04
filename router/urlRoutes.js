const express = require("express");
const router = express.Router();
const { generateNewShortURL } = require("../controller/urlHandel")

router.post("/" , generateNewShortURL);

module.exports = router ;