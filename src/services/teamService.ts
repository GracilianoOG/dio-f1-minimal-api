import { ResponseModel } from "../models/ResponseModel";
import { TeamModel } from "../models/TeamModel";
import * as teamRepository from "../repositories/teamRepository";
import { HttpStatus } from "../utils/httpStatus";

export const getAllTeams = async (): Promise<ResponseModel> => {
  const teams = await teamRepository.findAllTeams();

  if (!teams) {
    return {
      statusCode: HttpStatus.NOT_FOUND,
      body: { message: "Teams Not Found" },
    };
  }

  return { statusCode: HttpStatus.OK, body: teams };
};

export const getTeamById = async (id: number): Promise<ResponseModel> => {
  const team = await teamRepository.findTeamById(id);

  if (!team) {
    return {
      statusCode: HttpStatus.NOT_FOUND,
      body: { message: "Team Not Found" },
    };
  }

  return { statusCode: HttpStatus.OK, body: team };
};

export const postTeam = async (team: TeamModel): Promise<ResponseModel> => {
  if (!team) {
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      body: { message: "Invalid Team" },
    };
  }

  await teamRepository.insertTeam(team);

  return {
    statusCode: HttpStatus.CREATED,
    body: { message: "Team Created Successfully" },
  };
};
