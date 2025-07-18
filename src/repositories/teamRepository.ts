import { teams } from "../data/teams";
import { TeamModel } from "../models/TeamModel";

export class TeamRepository {
  async findAllTeams(): Promise<TeamModel[]> {
    return teams;
  }

  async findTeamById(id: number): Promise<TeamModel | undefined> {
    return teams.find(team => team.id === id);
  }
}
