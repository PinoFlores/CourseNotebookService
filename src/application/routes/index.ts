import path from 'path';
import fg from 'fast-glob';
import { Router } from 'express';

export function registerRoutes(router: Router) {
  fg.sync('./**/*.route.ts', { onlyFiles: false }).forEach(dir => {
    const modulePath = path.resolve(__dirname + '../../../../', dir);
    const route = require(modulePath);
    route.register(router);
    return dir;
  });
}
