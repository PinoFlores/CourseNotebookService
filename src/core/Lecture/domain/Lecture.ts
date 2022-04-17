import { v4 } from 'uuid';
import { Nullable } from 'src/core/shared/domain/Nullable';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { RemovableEntity } from 'src/core/shared/domain/Removable';
import { AggregateRoot } from 'src/core/shared/domain/AggregateRoot';
import { CreateLectureEntityPayload } from '../application/CreateLectureEntityPayload';

export class Lecture extends AggregateRoot implements RemovableEntity {
  private id: string;

  @IsString()
  private title: string;

  @IsOptional()
  @IsString()
  private content: Nullable<string>;

  @IsOptional()
  @IsDate()
  private createdAt: Nullable<Date>;

  @IsOptional()
  @IsDate()
  private updatedAt: Nullable<Date>;

  @IsOptional()
  @IsDate()
  private deletedAt: Nullable<Date>;

  constructor(payload: CreateLectureEntityPayload) {
    super();

    this.id = payload.id || v4();
    this.title = payload.title;
    this.content = payload.content || null;
    this.createdAt = payload.createdAt || null;
    this.updatedAt = payload.updatedAt || null;
    this.deletedAt = payload.deletedAt || null;
  }

  public getId(): string {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getContent(): Nullable<string> {
    return this.content;
  }

  public getCreatedAt(): Nullable<Date> {
    return this.createdAt;
  }

  public getUpdatedAt(): Nullable<Date> {
    return this.updatedAt;
  }

  public getDeletedAt(): Nullable<Date> {
    return this.deletedAt;
  }

  public async remove(): Promise<void> {
    this.deletedAt = new Date();
  }

  static fromPrimitives(plainData: { id: string; title: string; content: string }): Lecture {
    const created = new Lecture({
      id: plainData.id,
      title: plainData.title,
      content: plainData.content
    });
    created.validate();
    return created;
  }

  public static async new(payload: CreateLectureEntityPayload) {
    const lecture = new Lecture(payload);
    await lecture.validate();
    return lecture;
  }

  toPrimitives() {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      deletedAt: this.deletedAt
    };
  }
}
