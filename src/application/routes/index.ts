import fs from "fs";
import path from "path";
import { Router } from "express";

export function registerRoutes(router: Router) {
  const routes = fs.readdirSync(__dirname);

  console.log(routes);

  for (const routePath of routes) {
    if (routePath.includes(".route")) {
      const modulePath = path.resolve(__dirname, routePath);
      const route = require(modulePath);
      console.log(route);

      route.register(router);
    }
  }
}
