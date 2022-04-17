import httpStatus from 'http-status';
import { Controller } from './Controller';
import { Request, Response } from 'express';
import container from '@application/di';
import { MongoLectureRepository } from '@core/Lecture/infrastructure/persistance/MongoLectureRepository';

export default class StatusGetController implements Controller {
  async run(req: Request, res: Response) {
    const repo: MongoLectureRepository = container.get('Lectures.Repository');
    const a = await repo.search('1');

    res.status(httpStatus.OK).send(a?.toPrimitives());
  }
}
