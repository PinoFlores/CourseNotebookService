import httpStatus from 'http-status';
import { Controller } from '../Controller';
import { Request, Response } from 'express';
import { MongoLectureRepository } from '@core/Lecture/infrastructure/persistance/MongoLectureRepository';

export default class LectureGetController implements Controller {
  constructor(private repository: MongoLectureRepository) {}

  async run(req: Request, res: Response) {
    const lectures = await this.repository.findAll();
    res.status(httpStatus.OK).send(lectures);
  }
}
