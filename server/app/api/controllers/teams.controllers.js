const Teams = require("../models/Teams.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createTeams = async (req, res, next) => {
    try {
        const newTeams = new Teams();
        newTeams.name = req.body.name;
        newTeams.city = req.body.city;
        newTeams.stadium = req.body.stadium;
        newTeams.fundation = req.body.fundation;
        const TeamsDb = await newTeams.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { teams: TeamsDb.name }
        })
    } catch (error) {
        return next(error);
    }
}
const updateTeam = async (req, res, next) => {
    try {
        const { id } = req.params;
        const team=await Teams.findOneAndUpdate({_id:id},{name:req.body.name,city:req.body.city,stadium:req.body.stadium,fundation:req.body.fundation})
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[202],
            data: { teams: team }
        })
    } catch (error) {
        return next(error);
    }
}
const deleteTeam = async (req, res, next) => {
    try {
        const { id } = req.params;
        const team=await Teams.findOneAndDelete({_id:id})
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[202],
            data: { teams: team }
        })
    } catch (error) {
        return next(error);
    }
}

const getAllTeams = async (req, res, next) => {
    try {
            const teams = await Teams.find();
            return res.json({
                status: 200,
                message: HTTPSTATUSCODE[200],
                data: { teams: teams }
            });
    } catch (error) {
        return next(error)
    }
}

const getTeamsById = async (req, res, next) => {
    try {
        const { teamsId } = req.params;
        const teamsById = await Teams.findById(teamsId);
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { teams: teamsById }
        })
    } catch (error) {
        return next(error)
    }
}

module.exports = { createTeams,updateTeam,deleteTeam,getAllTeams, getTeamsById };