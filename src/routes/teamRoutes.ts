import { FastifyInstance } from "fastify";
import { ParamsModel } from "../models/ParamsModel";
import { TeamController } from "../controllers/teamController";

const controller = new TeamController();

export const teamRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    return new TeamController().getAllTeams();
  });

  fastify.get<{ Params: ParamsModel }>(
    "/teams/:id",
    async (request, response) => {
      const id: number = parseInt(request.params.id);
      const team = controller.getTeamById(id);

      if (!team) {
        response.type("application/json").code(404);
        return { message: "Team Not Found" };
      }

      response.type("application/json").code(200);
      return team;
    }
  );
};
