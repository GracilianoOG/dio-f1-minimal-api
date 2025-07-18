import { teams } from "../data/teams";
import { TeamModel } from "../models/TeamModel";

export const findAllTeams = async (): Promise<TeamModel[]> => {
  return teams;
};

export const findTeamById = async (
  id: number
): Promise<TeamModel | undefined> => {
  return teams.find(team => team.id === id);
};

export const insertTeam = async (team: TeamModel) => {
  teams.push(team);
};
