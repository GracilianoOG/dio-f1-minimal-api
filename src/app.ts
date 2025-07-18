import fastify from "fastify";
import cors from "@fastify/cors";
import { teamRoutes } from "./routes/teamRoutes";
import { driverRoutes } from "./routes/driverRoutes";

export const createApp = () => {
  const appOptions = { logger: true };
  const routeOptions = { prefix: "/api" };
  const app = fastify(appOptions);

  app.register(cors, {
    origin: "*",
  });

  app.register(teamRoutes, routeOptions);
  app.register(driverRoutes, routeOptions);

  return app;
};
