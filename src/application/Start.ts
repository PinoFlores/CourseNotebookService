import { Application } from '@application/Application';
try {
  new Application().start();
} catch (e) {
  process.exit(1);
}

process.on('uncaughtException', err => {
  console.log('uncaughtException', err);
});
// docker run --name mongodb -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=root mongo
