import fastify from "fastify";
import cors from "@fastify/cors";
import { teamRoutes } from "./routes/teamRoutes";
import { driverRoutes } from "./routes/driverRoutes";

export const createApp = () => {
  const app = fastify({ logger: true });

  app.register(cors, {
    origin: "*",
  });

  app.register(teamRoutes);
  app.register(driverRoutes);

  return app;
};
