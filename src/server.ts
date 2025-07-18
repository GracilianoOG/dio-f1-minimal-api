import { createApp } from "./app";

const server = createApp();
const port = parseInt(process.env.PORT ?? "3333");

server.listen({ port: port }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`Server listening at ${address}`);
});
