import { DriverModel } from "../models/DriverModel";
import { ResponseModel } from "../models/ResponseModel";
import * as driverRepository from "../repositories/driverRepository";
import { HttpStatus } from "../utils/httpStatus";

export const getAllDrivers = async (): Promise<ResponseModel> => {
  const drivers = await driverRepository.findAllDrivers();

  if (!drivers) {
    return {
      statusCode: HttpStatus.NOT_FOUND,
      body: { message: "Drivers Not Found" },
    };
  }

  return { statusCode: HttpStatus.OK, body: drivers };
};

export const getDriverById = async (id: number): Promise<ResponseModel> => {
  const driver = await driverRepository.findDriverById(id);

  if (!driver) {
    return {
      statusCode: HttpStatus.NOT_FOUND,
      body: { message: "Driver Not Found" },
    };
  }

  return { statusCode: HttpStatus.OK, body: driver };
};

export const postDriver = async (
  driver: DriverModel
): Promise<ResponseModel> => {
  if (!driver) {
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      body: { message: "Invalid Driver" },
    };
  }

  await driverRepository.insertDriver(driver);

  return {
    statusCode: HttpStatus.CREATED,
    body: { message: "Driver Created Successfully" },
  };
};

export const deleteDriver = async (id: number) => {
  return await driverRepository.deleteDriver(id);
};

export const patchDriver = async (id: number, updates: any) => {
  return await driverRepository.patchDriver(id, updates);
};

export const updateDriver = async (id: number, newDriver: DriverModel) => {
  return await driverRepository.patchDriver(id, newDriver);
};
