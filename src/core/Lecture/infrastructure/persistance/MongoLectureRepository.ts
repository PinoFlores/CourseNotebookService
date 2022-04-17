import { Lecture } from 'src/core/Lecture/domain/Lecture';
import { Nullable } from 'src/core/shared/domain/Nullable';
import { LectureRepository } from 'src/core/Lecture/domain/LectureRepository';
import { MongoRepository } from '@infrastructure/persistance/mongo/MongoRepository';

export class MongoLectureRepository extends MongoRepository<Lecture> implements LectureRepository {
  public async findAll(): Promise<Lecture[]> {
    const collection = await this.collection();
    return (await collection.find().toArray()).map(document => {
      return Lecture.fromPrimitives({
        id: document._id.toString(),
        title: document?.title || '',
        content: document?.content || ''
      });
    });
  }

  public async create(lecture: Lecture): Promise<void> {
    const created = await Lecture.new({
      title: lecture.getTitle(),
      content: lecture.getContent()
    });
    return this.persist(created.getId(), created);
  }

  public async findById(id: string): Promise<Nullable<Lecture>> {
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
