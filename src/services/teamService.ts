import { TeamModel } from "../models/TeamModel";
import { TeamRepository } from "../repositories/teamRepository";

export class TeamService {
  private teamRepository: TeamRepository;

  constructor() {
    this.teamRepository = new TeamRepository();
  }

  async getAllTeams(): Promise<TeamModel[]> {
    return this.teamRepository.findAllTeams();
  }

  async getTeamById(id: number): Promise<TeamModel | undefined> {
    return this.teamRepository.findTeamById(id);
  }
}
