import httpStatus from 'http-status';
import { Controller } from '../Controller';
import { Request, Response } from 'express';
import { MongoLectureRepository } from '@core/Lecture/infrastructure/persistance/MongoLectureRepository';

export default class LectureGetController implements Controller {
  constructor(private repository: MongoLectureRepository) {}

  async run(req: Request, res: Response) {
    const a = await this.repository.search('1');
    res.status(httpStatus.OK).send(a?.toPrimitives());
  }
}
