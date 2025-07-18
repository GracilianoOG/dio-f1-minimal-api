import { FastifyReply, FastifyRequest } from "fastify";
import * as teamService from "../services/teamService";
import { ParamsModel } from "../models/ParamsModel";

export const getAllTeams = async (
  request: FastifyRequest,
  response: FastifyReply
) => {
  response.type("application/json").code(200);
  return await teamService.getAllTeams();
};

export const getTeamById = async (
  request: FastifyRequest<{ Params: ParamsModel }>,
  response: FastifyReply
) => {
  const id: number = parseInt(request.params.id);
  const team = await teamService.getTeamById(id);

  if (!team) {
    response.type("application/json").code(404);
    return { message: "Team Not Found" };
  }

  response.type("application/json").code(200);
  return team;
};
