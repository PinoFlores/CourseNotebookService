import { v4 } from "uuid";
import { Nullable } from "@core/common/type";
import { Entity, RemovableEntity } from "@core/common/entity";
import { IsDate, IsOptional, IsString } from "class-validator";
import { CreateLectureEntityPayload } from "./types/CreateLectureEntityPayload";

export class Lecture extends Entity<string> implements RemovableEntity {
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

  public async remove(): Promise<void> {
    this.deletedAt = new Date();
    await this.validate();
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
}
