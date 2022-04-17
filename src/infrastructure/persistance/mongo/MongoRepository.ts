import { Collection, MongoClient } from 'mongodb';
import { AggregateRoot } from 'src/core/shared/domain/AggregateRoot';

export abstract class MongoRepository<T extends AggregateRoot> {
  constructor(private _client: Promise<MongoClient>) {}

  protected abstract moduleName(): string;

  protected client(): Promise<MongoClient> {
    return this._client;
  }

  protected async collection(): Promise<Collection> {
    return (await this._client).db().collection(this.moduleName());
  }

  protected async persist(id: string, aggregateRoot: T): Promise<void> {
    const collection = await this.collection();
    const document = { ...aggregateRoot.toPrimitives(), _id: id, id: undefined };
    const a = await collection.insertOne(document);
    console.log(a);
  }
}
