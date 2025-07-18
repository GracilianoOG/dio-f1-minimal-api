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

export const getTeamById = async (
  id: number
): Promise<TeamModel | undefined> => {
  return await teamRepository.findTeamById(id);
};
