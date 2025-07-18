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

export const deleteTeam = async (id: number) => {
  const teamId = teams.findIndex(team => team.id === id);

  if (teamId !== -1) {
    teams.splice(teamId, 1);
    return true;
  }

  return false;
};

export const patchTeam = async (id: number, updates: any) => {
  const teamId = teams.findIndex(team => team.id === id);

  if (teamId === -1) {
    return null;
  }

  const currentTeam: TeamModel = teams[teamId];
  const updatedTeam: TeamModel = { ...currentTeam, ...updates };
  teams[teamId] = updatedTeam;

  return updatedTeam;
};

export const updateTeam = async (id: number, newTeam: TeamModel) => {
  const teamId = teams.findIndex(team => team.id === id);

  if (teamId === -1) {
    return null;
  }

  teams[teamId] = newTeam;

  return newTeam;
};
