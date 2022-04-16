import container from "../di";
import { Router, Request, Response } from "express";
import StatusController from "../controllers/StatusGetController";

const KEY = "Apps.controllers.StatusGetController";

export const register = (router: Router) => {
  const controller: StatusController = container.get(KEY);
  router.get("/status", (req: Request, res: Response) =>
    controller.run(req, res)
  );
};
