import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
  // origin: ["www.mywebsite.com", "www.example.com"]
  // methods: ["GET", "POST"],
  origin: "*",
});

const teams = [
  { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
  { id: 4, name: "Ferrari", base: "Maranello, Italy" },
  { id: 5, name: "Alpine", base: "Enstone, United Kingdom" },
  { id: 6, name: "Aston Martin", base: "Silverstone, United Kingdom" },
  { id: 7, name: "Williams", base: "Grove, United Kingdom" },
  { id: 8, name: "Alfa Romeo", base: "Hinwil, Switzerland" },
  { id: 9, name: "Haas F1 Team", base: "Kannapolis, USA" },
  { id: 10, name: "AlphaTauri", base: "Faenza, Italy" },
];

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
  return teams;
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

server.listen({ port: 3333 }, () => {
  console.log("Server started!");
});
