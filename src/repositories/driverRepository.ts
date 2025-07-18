import { drivers } from "../data/drivers";
import { DriverModel } from "../models/DriverModel";

export const findAllDrivers = async (): Promise<DriverModel[]> => {
  return drivers;
};

export const findDriverById = async (
  id: number
): Promise<DriverModel | undefined> => {
  return drivers.find(driver => driver.id === id);
};
