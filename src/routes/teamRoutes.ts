import { FastifyInstance } from "fastify";
import * as teamController from "../controllers/teamController";

export const teamRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/teams", teamController.getAllTeams);
  fastify.get("/teams/:id", teamController.getTeamById);
};
