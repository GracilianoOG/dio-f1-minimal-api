import { FastifyInstance } from "fastify";
import * as teamController from "../controllers/teamController";

export const teamRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/teams", teamController.getAllTeams);
  fastify.get("/teams/:id", teamController.getTeamById);
  fastify.post("/teams", teamController.postTeam);
  fastify.delete("/teams/:id", teamController.deleteTeam);
  fastify.patch("/teams/:id", teamController.patchTeam);
  fastify.put("/teams/:id", teamController.updateTeam);
};
