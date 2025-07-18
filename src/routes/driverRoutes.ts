import { FastifyInstance } from "fastify";
import * as driverController from "../controllers/driverController";

export const driverRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/drivers", driverController.getAllDrivers);
  fastify.get("/drivers/:id", driverController.getDriverById);
};
