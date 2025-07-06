import { DriverModel } from "../models/DriverModel";
import { DriverRepository } from "../repositories/driverRepository";

export class DriverService {
  private driverRepository: DriverRepository;

  constructor() {
    this.driverRepository = new DriverRepository();
  }

  async getAllDrivers(): Promise<DriverModel[]> {
    return await this.driverRepository.findAllDrivers();
  }

  async getDriverById(id: number): Promise<DriverModel | undefined> {
    return await this.driverRepository.findDriverById(id);
  }
}
