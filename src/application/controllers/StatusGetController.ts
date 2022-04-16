import httpStatus from "http-status";
import { Controller } from "./Controller";
import { Request, Response } from "express";

export default class StatusGetController implements Controller {
  async run(req: Request, res: Response) {
    res.status(httpStatus.OK).send();
  }
}
