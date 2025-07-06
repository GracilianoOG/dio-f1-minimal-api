import { TeamService } from "../services/teamService";

export class TeamController {
  private teamService: TeamService;

  constructor() {
    this.teamService = new TeamService();
  }

  async getAllTeams() {
    return await this.teamService.getAllTeams();
  }

  async getTeamById(id: number) {
    return await this.teamService.getTeamById(id);
  }
}
