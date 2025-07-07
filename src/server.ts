import fastify from "fastify";
import cors from "@fastify/cors";
import { DriverController } from "./controllers/driverController";
import { ParamsModel } from "./models/ParamsModel";
import { teamRoutes } from "./routes/teamRoutes";

const server = fastify({ logger: true });

server.register(cors, {
  // origin: ["www.mywebsite.com", "www.example.com"]
  // methods: ["GET", "POST"],
  origin: "*",
});

server.register(teamRoutes);

server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200);
  return new DriverController().getAllDrivers();
});

server.get<{ Params: ParamsModel }>(
  "/drivers/:id",
  async (request, response) => {
    const id: number = parseInt(request.params.id);
    const driverController = new DriverController();
    const driver = driverController.getDriverById(id);

    if (!driver) {
      response.type("application/json").code(404);
      return { message: "Driver Not Found" };
    }

    response.type("application/json").code(200);
    return driver;
  }
);

server.listen({ port: 3333 }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`Server listening at ${address}`);
});
