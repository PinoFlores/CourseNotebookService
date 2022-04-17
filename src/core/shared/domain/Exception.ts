import { Optional } from './Nullable';

export type CreateExceptionPayload<T> = {
  message?: string;
  data?: T;
};

export default class Exception<T> extends Error {
  public readonly code: number;
  public readonly data: Optional<any>;

  private constructor(payload: CreateExceptionPayload<T>) {
    super();
    this.data = payload.data;
    this.message = payload.message || '';
    Error.captureStackTrace(this, this.constructor);
  }

  public static new<T>(payload: CreateExceptionPayload<T>): Exception<T> {
    return new Exception(payload);
  }
}
