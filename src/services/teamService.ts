import { TeamModel } from "../models/TeamModel";
import * as teamRepository from "../repositories/teamRepository";

export const getAllTeams = async (): Promise<TeamModel[]> => {
  return await teamRepository.findAllTeams();
};

export const getTeamById = async (
  id: number
): Promise<TeamModel | undefined> => {
  return await teamRepository.findTeamById(id);
};
