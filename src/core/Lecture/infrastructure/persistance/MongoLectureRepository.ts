import { Lecture } from '@core/Lecture/domain/Lecture';
import { Nullable } from '@core/shared/domain/Nullable';
import { LectureRepository } from '@core/Lecture/domain/LectureRepository';
import { MongoRepository } from '@infrastructure/persistance/mongo/MongoRepository';

export class MongoLectureRepository extends MongoRepository<Lecture> implements LectureRepository {
  save(lecture: Lecture): Promise<void> {
    return this.persist(lecture.getId(), lecture);
  }
  search(id: string): Promise<Nullable<Lecture>> {
    throw new Error('Method not implemented.');
  }

  protected moduleName(): string {
    return 'lectures';
  }
}
