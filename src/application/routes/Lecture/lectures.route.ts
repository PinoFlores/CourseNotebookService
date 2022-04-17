import container from '@application/di';
import { Router, Request, Response } from 'express';
import LectureGetController from '@application/controllers/Lecture/LectureGetController';

const KEY = 'Lectures.GetController';

export const register = (router: Router) => {
  const controller: LectureGetController = container.get(KEY);
  router.get('/lectures', (req: Request, res: Response) => controller.run(req, res));
};
