import { Lecture } from './Lecture';
import { Nullable } from 'src/core/shared/domain/Nullable';

export interface LectureRepository {
  save(lecture: Lecture): Promise<void>;
  search(id: string): Promise<Nullable<Lecture>>;
}
