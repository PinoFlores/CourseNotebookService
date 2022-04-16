import { Nullable } from '@core/shared/domain/Nullable';

export type CreateLectureEntityPayload = {
  id?: string;
  title: string;
  content: Nullable<string>;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};
