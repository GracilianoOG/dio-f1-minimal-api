import { FastifyReply, FastifyRequest } from "fastify";
import * as teamService from "../services/teamService";
import { ParamsModel } from "../models/ParamsModel";
import { HttpStatus } from "../utils/httpStatus";
import { HttpTypes } from "../utils/httpTypes";

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
  const team = await teamService.getTeamById(id);

  if (!team) {
    response.type("application/json").code(HttpStatus.NOT_FOUND);
    return { message: "Team Not Found" };
  }

  response.type("application/json").code(HttpStatus.OK);
  return team;
};
