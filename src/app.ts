import fastify from "fastify";
import cors from "@fastify/cors";
import { teamRoutes } from "./routes/teamRoutes";
import { driverRoutes } from "./routes/driverRoutes";

export const createApp = () => {
  const app = fastify({ logger: true });
  const routeOptions = { prefix: "/api" };

  app.register(cors, {
    origin: "*",
  });

  app.register(teamRoutes, routeOptions);
  app.register(driverRoutes, routeOptions);

  return app;
};
