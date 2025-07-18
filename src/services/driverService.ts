import { DriverModel } from "../models/DriverModel";
import { DriverRepository } from "../repositories/driverRepository";

const driverRepository = new DriverRepository();

export const getAllDrivers = async (): Promise<DriverModel[]> => {
  return await driverRepository.findAllDrivers();
};

export const getDriverById = async (
  id: number
): Promise<DriverModel | undefined> => {
  return await driverRepository.findDriverById(id);
};
