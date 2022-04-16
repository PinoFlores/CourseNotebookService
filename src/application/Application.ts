import { ExpressServer } from './Server';

export class Application {
  server?: ExpressServer;

  async start() {
    const port = process.env.PORT || '8080';
    this.server = new ExpressServer(port);
    return this.server.listen();
  }

  get httpServer() {
    return this.server?.getHTTPServer();
  }

  async stop() {
    return this.server?.stop();
  }
}
