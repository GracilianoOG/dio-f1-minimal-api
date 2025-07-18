import { DriverModel } from "../models/DriverModel";
import * as driverRepository from "../repositories/driverRepository";

export const getAllDrivers = async (): Promise<DriverModel[]> => {
  return await driverRepository.findAllDrivers();
};

export const getDriverById = async (
  id: number
): Promise<DriverModel | undefined> => {
  return await driverRepository.findDriverById(id);
};

export const postDriver = async (driver: DriverModel) => {
  return await driverRepository.insertDriver(driver);
};
