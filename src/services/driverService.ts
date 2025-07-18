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

export const deleteDriver = async (id: number) => {
  return await driverRepository.deleteDriver(id);
};

export const patchDriver = async (id: number, updates: any) => {
  return await driverRepository.patchDriver(id, updates);
};
