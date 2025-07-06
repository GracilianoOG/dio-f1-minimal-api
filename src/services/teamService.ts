import { TeamModel } from "../models/TeamModel";
import { TeamRepository } from "../repositories/teamRepository";

export class TeamService {
  private teamRepository: TeamRepository;

  constructor() {
    this.teamRepository = new TeamRepository();
  }

  async getAllTeams(): Promise<TeamModel[]> {
    return await this.teamRepository.findAllTeams();
  }

  async getTeamById(id: number): Promise<TeamModel | undefined> {
    return await this.teamRepository.findTeamById(id);
  }
}
