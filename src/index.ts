import express from "express";
import { createServer } from "http";

const app = express();

const server = createServer(app);

server.listen({ port: 4000 }, () => {
  console.log("aaaaaaaaaaaa");
});
