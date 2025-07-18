import { FastifyReply, FastifyRequest } from "fastify";
import * as teamService from "../services/teamService";
import { ParamsModel } from "../models/ParamsModel";
import { HttpStatus } from "../utils/httpStatus";
import { HttpTypes } from "../utils/httpTypes";
import { TeamModel } from "../models/TeamModel";

export const getAllTeams = async (
  request: FastifyRequest,
  response: FastifyReply
) => {
  const data = await teamService.getAllTeams();
  const { statusCode, body: teams } = data;
  response.type(HttpTypes.JSON).code(statusCode);
  return teams;
};

export const getTeamById = async (
  request: FastifyRequest<{ Params: ParamsModel }>,
  response: FastifyReply
) => {
  const id: number = parseInt(request.params.id);
  const data = await teamService.getTeamById(id);
  const { statusCode, body: team } = data;
  response.type(HttpTypes.JSON).code(statusCode);
  return team;
};

export const postTeam = async (
  request: FastifyRequest<{ Body: TeamModel }>,
  response: FastifyReply
) => {
  const team: TeamModel = request.body;
  const data = await teamService.postTeam(team);
  const { statusCode, body: teamStatus } = data;
  response.type(HttpTypes.JSON).code(statusCode);
  return teamStatus;
};

export const deleteTeam = async (
  request: FastifyRequest<{ Params: ParamsModel }>,
  response: FastifyReply
) => {
  const teamId = parseInt(request.params.id);
  const data = await teamService.deleteTeam(teamId);
  const { statusCode, body: teamStatus } = data;
  response.type(HttpTypes.JSON).code(statusCode);
  return teamStatus;
};

export const patchTeam = async (
  request: FastifyRequest<{ Params: ParamsModel }>,
  response: FastifyReply
) => {
  const teamId = parseInt(request.params.id);
  const updates = request.body;
  const data = await teamService.patchTeam(teamId, updates);
  const { statusCode, body: patchedTeam } = data;
  response.type(HttpTypes.JSON).code(statusCode);
  return patchedTeam;
};

export const updateTeam = async (
  request: FastifyRequest<{ Params: ParamsModel; Body: TeamModel }>,
  response: FastifyReply
) => {
  const teamId = parseInt(request.params.id);
  const newTeam = request.body;
  const data = await teamService.updateTeam(teamId, newTeam);
  const { statusCode, body: updatedTeam } = data;
  response.type(HttpTypes.JSON).code(statusCode);
  return updatedTeam;
};
