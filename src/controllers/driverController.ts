import { DriverService } from "../services/driverService";

export class DriverController {
  private driverService: DriverService;

  constructor() {
    this.driverService = new DriverService();
  }

  async getAllDrivers() {
    return await this.driverService.getAllDrivers();
  }

  async getDriverById(id: number) {
    return await this.driverService.getDriverById(id);
  }
}
