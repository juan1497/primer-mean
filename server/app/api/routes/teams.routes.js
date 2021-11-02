const express = require("express");
const router = express.Router();

const { createTeams,updateTeam, deleteTeam,getAllTeams, getTeamsById } = require("../controllers/teams.controllers")
const { isAuth } = require("../../../middlewares/auth.middleware");
router.post("/create", [isAuth],createTeams);
router.put("/update/:id",[isAuth], updateTeam);
router.delete("/delete/:id",[isAuth], deleteTeam);
router.get("/",[isAuth], getAllTeams);
router.get("/:teamsId",[isAuth], getTeamsById);


module.exports = router;