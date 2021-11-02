const express = require("express");
const router = express.Router();

const { createLeague, getAllLeagues } = require("../controllers/league.controllers");
const { isAuth } = require("../../../middlewares/auth.middleware");


router.post("/create", [isAuth],createLeague);
router.get("/",[isAuth], getAllLeagues);

module.exports = router;