import { Optional } from './Nullable';
import Exception from '@core/shared/domain/Exception';
import { ClassValidationDetails, ClassValidator } from './ClassValidator';

export abstract class AggregateRoot {
  abstract toPrimitives(): any;

  public async validate(): Promise<void> {
    const details: Optional<ClassValidationDetails> = await ClassValidator.validate(this);
    if (details) {
      throw Exception.new({ message: 'InvalidLecture', data: details });
    }
  }
}
