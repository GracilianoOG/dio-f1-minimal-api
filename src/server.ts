import fastify from "fastify";
import cors from "@fastify/cors";
import { teamRoutes } from "./routes/teamRoutes";
import { driverRoutes } from "./routes/driverRoutes";

const server = fastify({ logger: true });

server.register(cors, {
  // origin: ["www.mywebsite.com", "www.example.com"]
  // methods: ["GET", "POST"],
  origin: "*",
});

server.register(teamRoutes);
server.register(driverRoutes);

server.listen({ port: 3333 }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`Server listening at ${address}`);
});
