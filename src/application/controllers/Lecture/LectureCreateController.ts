import httpStatus from 'http-status';
import { Controller } from '../Controller';
import { Request, Response } from 'express';
import { MongoLectureRepository } from '@core/Lecture/infrastructure/persistance/MongoLectureRepository';
import { Lecture } from '@core/Lecture/domain/Lecture';

export default class LectureCreateController implements Controller {
  constructor(private repository: MongoLectureRepository) {}

  async run(req: Request, res: Response) {
    try {
      const { id, title, content } = req.body;
      const lecture = Lecture.fromPrimitives({
        id,
        title,
        content
      });
      const created = await this.repository.create(lecture);
      res.status(httpStatus.OK).send(created);
    } catch (error) {
      res.status(httpStatus.OK).send(error);
    }
  }
}
