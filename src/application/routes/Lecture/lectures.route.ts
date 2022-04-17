import container from '@application/di';
import { Router, Request, Response } from 'express';
import LectureGetController from '@application/controllers/Lecture/LectureGetController';
import LectureCreateController from '@application/controllers/Lecture/LectureCreateController';

export const register = (router: Router) => {
  const getController: LectureGetController = container.get('Lectures.GetController');
  router.get('/lectures', (req: Request, res: Response) => getController.run(req, res));

  const createController: LectureCreateController = container.get('Lectures.CreateController');
  router.post('/lectures', (req: Request, res: Response) => createController.run(req, res));
};
