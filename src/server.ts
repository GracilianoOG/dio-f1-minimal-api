import fastify from "fastify";
import cors from "@fastify/cors";
import { TeamController } from "./controllers/teamController";

const server = fastify({ logger: true });

server.register(cors, {
  // origin: ["www.mywebsite.com", "www.example.com"]
  // methods: ["GET", "POST"],
  origin: "*",
});

const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Lewis Hamilton", team: "Mercedes" },
  { id: 3, name: "Lando Norris", team: "McLaren" },
  { id: 4, name: "Charles Leclerc", team: "Ferrari" },
  { id: 5, name: "Fernando Alonso", team: "Aston Martin" },
  { id: 6, name: "Sebastian Vettel", team: "Aston Martin" },
  { id: 7, name: "George Russell", team: "Mercedes" },
  { id: 8, name: "Carlos Sainz", team: "Ferrari" },
  { id: 9, name: "Pierre Gasly", team: "Alpine" },
  { id: 10, name: "Kevin Magnussen", team: "Haas F1 Team" },
  { id: 11, name: "Lance Stroll", team: "Aston Martin" },
  { id: 12, name: "Yuki Tsunoda", team: "AlphaTauri" },
  { id: 13, name: "Valtteri Bottas", team: "Alfa Romeo" },
  { id: 14, name: "Zhou Guanyu", team: "Alfa Romeo" },
  { id: 15, name: "Alex Albon", team: "Williams" },
  { id: 16, name: "Nicholas Latifi", team: "Williams" },
];

server.get("/teams", async (request, response) => {
  response.type("application/json").code(200);
  return new TeamController().getAllTeams();
});

server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200);
  return drivers;
});

interface DriverParams {
  id: string;
}

server.get<{ Params: DriverParams }>(
  "/drivers/:id",
  async (request, response) => {
    const id: number = parseInt(request.params.id);
    const driver = drivers.find(d => d.id === id);

    if (!driver) {
      response.type("application/json").code(404);
      return { message: "Driver Not Found" };
    }

    response.type("application/json").code(200);
    return driver;
  }
);

interface TeamParams {
  id: string;
}

server.get<{ Params: TeamParams }>("/teams/:id", async (request, response) => {
  const id: number = parseInt(request.params.id);
  const teamController = new TeamController();
  const team = teamController.getTeamById(id);

  if (!team) {
    response.type("application/json").code(404);
    return { message: "Team Not Found" };
  }

  response.type("application/json").code(200);
  return team;
});

server.listen({ port: 3333 }, () => {
  console.log("Server started!");
});
