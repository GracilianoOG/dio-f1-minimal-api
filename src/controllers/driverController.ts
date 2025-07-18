import { FastifyReply, FastifyRequest } from "fastify";
import * as driverService from "../services/driverService";
import { ParamsModel } from "../models/ParamsModel";
import { DriverModel } from "../models/DriverModel";
import { HttpStatus } from "../utils/httpStatus";
import { HttpTypes } from "../utils/httpTypes";

export const getDriverById = async (
  request: FastifyRequest<{ Params: ParamsModel }>,
  response: FastifyReply
) => {
  const id: number = parseInt(request.params.id);
  const data = await driverService.getDriverById(id);
  const { statusCode, body: driver } = data;
  response.type(HttpTypes.JSON).code(statusCode);
  return driver;
};

export const getAllDrivers = async (
  request: FastifyRequest,
  response: FastifyReply
) => {
  const data = await driverService.getAllDrivers();
  const { statusCode, body: drivers } = data;
  response.type(HttpTypes.JSON).code(statusCode);
  return drivers;
};

export const postDriver = async (
  request: FastifyRequest<{ Body: DriverModel }>,
  response: FastifyReply
) => {
  const driver: DriverModel = request.body;
  const data = await driverService.postDriver(driver);
  const { statusCode, body: driverStatus } = data;
  response.type(HttpTypes.JSON).code(statusCode);
  return driverStatus;
};

export const deleteDriver = async (
  request: FastifyRequest<{ Params: ParamsModel }>,
  response: FastifyReply
) => {
  const driverId = parseInt(request.params.id);
  const hasDeleted = await driverService.deleteDriver(driverId);

  if (!hasDeleted) {
    response.type(HttpTypes.JSON).code(HttpStatus.BAD_REQUEST);
    return { message: "Invalid Driver" };
  }

  response.type(HttpTypes.JSON).code(HttpStatus.OK);
  return { message: "Driver Deleted Successfully" };
};

export const patchDriver = async (
  request: FastifyRequest<{ Params: ParamsModel }>,
  response: FastifyReply
) => {
  const driverId = parseInt(request.params.id);
  const updates = request.body;
  const updatedDriver = await driverService.patchDriver(driverId, updates);

  if (!updatedDriver) {
    response.type(HttpTypes.JSON).code(HttpStatus.BAD_REQUEST);
    return { message: "Invalid Driver" };
  }

  response.type(HttpTypes.JSON).code(HttpStatus.OK);
  return updatedDriver;
};

export const updateDriver = async (
  request: FastifyRequest<{ Params: ParamsModel; Body: DriverModel }>,
  response: FastifyReply
) => {
  const driverId = parseInt(request.params.id);
  const newDriver = request.body;
  const updatedDriver = await driverService.updateDriver(driverId, newDriver);

  if (!updatedDriver) {
    response.type(HttpTypes.JSON).code(HttpStatus.BAD_REQUEST);
    return { message: "Invalid Driver" };
  }

  response.type(HttpTypes.JSON).code(HttpStatus.OK);
  return updatedDriver;
};
