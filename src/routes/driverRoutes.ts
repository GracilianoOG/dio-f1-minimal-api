import { FastifyInstance } from "fastify";
import * as driverController from "../controllers/driverController";

export const driverRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/drivers", driverController.getAllDrivers);
  fastify.get("/drivers/:id", driverController.getDriverById);
  fastify.post("/drivers", driverController.postDriver);
  fastify.delete("/drivers/:id", driverController.deleteDriver);
  fastify.patch("/drivers/:id", driverController.patchDriver);
  fastify.put("/drivers/:id", driverController.updateDriver);
};
