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

export const deleteDriver = async (id: number): Promise<ResponseModel> => {
  const hasDeleted = await driverRepository.deleteDriver(id);

  if (!hasDeleted) {
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      body: { message: "Invalid Driver" },
    };
  }

  return {
    statusCode: HttpStatus.OK,
    body: { message: "Driver Deleted Successfully" },
  };
};

export const patchDriver = async (
  id: number,
  updates: any
): Promise<ResponseModel> => {
  const patchedDriver = await driverRepository.patchDriver(id, updates);

  if (!patchedDriver) {
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      body: { message: "Invalid Driver" },
    };
  }

  return {
    statusCode: HttpStatus.OK,
    body: patchedDriver,
  };
};

export const updateDriver = async (id: number, newDriver: DriverModel) => {
  return await driverRepository.patchDriver(id, newDriver);
};
