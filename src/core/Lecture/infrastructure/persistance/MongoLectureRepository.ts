import { Lecture } from 'src/core/Lecture/domain/Lecture';
import { Nullable } from 'src/core/shared/domain/Nullable';
import { LectureRepository } from 'src/core/Lecture/domain/LectureRepository';
import { MongoRepository } from '@infrastructure/persistance/mongo/MongoRepository';
import { Document } from 'mongodb';

export class MongoLectureRepository extends MongoRepository<Lecture> implements LectureRepository {
  save(lecture: Lecture): Promise<void> {
    return this.persist(lecture.getId(), lecture);
  }
  public async search(id: string): Promise<Nullable<Lecture>> {
    const collection = await this.collection();
    const document = await collection.findOne({ _id: id });
    if (document) {
      return Lecture.fromPrimitives({
        id: document._id.toString(),
        title: document?.title || '',
        content: document?.content || ''
      });
    }

    return null;
  }

  protected moduleName(): string {
    return 'lectures';
  }
}
