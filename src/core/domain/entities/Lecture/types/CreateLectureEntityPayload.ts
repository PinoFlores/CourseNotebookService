import { Nullable } from "@core/common/type";

export type CreateLectureEntityPayload = {
  id?: string;
  title: string;
  content: Nullable<string>;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};
