import path from 'path';
import glob from 'glob';
import { Router } from 'express';

export function registerRoutes(router: Router) {
  glob.sync('src/application/routes/**/*.route.ts').forEach(dir => {
    const modulePath = path.resolve(__dirname + '../../../../', dir);
    const route = require(modulePath);
    route.register(router);
  });
}
