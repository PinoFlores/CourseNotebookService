import { Application } from '@application/Application';
// import { Lecture } from 'src/core/Lecture/domain/Lecture';
// import { MongoLectureRepository } from 'src/core/Lecture/infrastructure/persistance/MongoLectureRepository';
// import { MongoClientFactory } from '@infrastructure/persistance/mongo/MongoClientFactory';

// const client = MongoClientFactory.createClient('lectuyres', {
//   url: 'mongodb://root:root@localhost:27017'
// });

// const repo = new MongoLectureRepository(client);
// repo.save(new Lecture({ id: '1', title: '', content: 'aaaa', createdAt: new Date() }));

try {
  new Application().start();
} catch (e) {
  console.log(e);
  process.exit(1);
}

process.on('uncaughtException', err => {
  console.log('uncaughtException', err);
  process.exit(1);
});
// docker run --name mongodb -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=root mongo
