import { FastifyInstance } from "fastify";
import { ParamsModel } from "../models/ParamsModel";
import { DriverController } from "../controllers/driverController";

const controller = new DriverController();

export const driverRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);
    return controller.getAllDrivers();
  });

  fastify.get<{ Params: ParamsModel }>(
    "/drivers/:id",
    async (request, response) => {
      const id: number = parseInt(request.params.id);
      const driver = controller.getDriverById(id);

      if (!driver) {
        response.type("application/json").code(404);
        return { message: "Driver Not Found" };
      }

      response.type("application/json").code(200);
      return driver;
    }
  );
};
