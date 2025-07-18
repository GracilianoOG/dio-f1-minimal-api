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
