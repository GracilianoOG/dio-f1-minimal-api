import { HttpStatus } from "../utils/httpStatus";

export interface ResponseModel {
  statusCode: HttpStatus;
  body: any;
}
