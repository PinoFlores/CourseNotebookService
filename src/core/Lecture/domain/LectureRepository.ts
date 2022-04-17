import { Lecture } from './Lecture';
import { Nullable } from 'src/core/shared/domain/Nullable';

export interface LectureRepository {
  findAll(): Promise<Lecture[]>;
  create(lecture: Lecture): Promise<void>;
  findById(id: string): Promise<Nullable<Lecture>>;
}
