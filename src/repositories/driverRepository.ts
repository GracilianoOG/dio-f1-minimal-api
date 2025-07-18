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

export const insertDriver = async (driver: DriverModel) => {
  drivers.push(driver);
};

export const deleteDriver = async (id: number) => {
  const driverId = drivers.findIndex(driver => driver.id === id);

  if (driverId !== -1) {
    drivers.splice(driverId, 1);
    return true;
  }

  return false;
};

export const patchDriver = async (id: number, updates: any) => {
  const driverId = drivers.findIndex(driver => driver.id === id);

  if (driverId === -1) {
    return null;
  }

  const currentDriver: DriverModel = drivers[driverId];
  const updatedDriver: DriverModel = { ...currentDriver, ...updates };
  drivers[driverId] = updatedDriver;

  return updatedDriver;
};

export const updateDriver = async (id: number, newDriver: DriverModel) => {
  const driverId = drivers.findIndex(driver => driver.id === id);

  if (driverId === -1) {
    return null;
  }

  drivers[driverId] = newDriver;

  return newDriver;
};
