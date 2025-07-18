import { FastifyReply, FastifyRequest } from "fastify";
import * as driverService from "../services/driverService";
import { ParamsModel } from "../models/ParamsModel";

export const getDriverById = async (
  request: FastifyRequest<{ Params: ParamsModel }>,
  response: FastifyReply
) => {
  const id: number = parseInt(request.params.id);
  const driver = driverService.getDriverById(id);

  if (!driver) {
    response.type("application/json").code(404);
    return { message: "Driver Not Found" };
  }

  response.type("application/json").code(200);
  return driver;
};

export const getAllDrivers = async (
  request: FastifyRequest,
  response: FastifyReply
) => {
  response.type("application/json").code(200);
  return await driverService.getAllDrivers();
};
