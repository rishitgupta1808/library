import { startApp } from "./app";
import orrmConfig from "../ormconfig";
import { dbManager } from "./config/db";
import dotenv from "dotenv";
dotenv.config();

const port = +process.env.PORT || 8080;

let server: any = startApp(port);

console.log("orrmConfig", orrmConfig, process.env.PORT);

dbManager
  .connect()
  .then(async () => {
    console.log("Connected to Database");
    //  server = startApp(port)           // in our case, db is not necessarily available but server should connect after db connection
  })
  .catch((err) => console.log(err));

const exitHandler = (error: any) => {
  if (error instanceof Error) {
    console.error(error);
  } else {
    console.log(`Received ${error}.`);
  }

  if (server) {
    server.close(() => {
      console.log("Server closed");
      dbManager.close();
    });
  } else {
    process.exit(1);
  }
};

process.on("uncaughtException", exitHandler);
process.on("unhandledRejection", exitHandler);

process.on("SIGINT", exitHandler);
process.on("SIGTERM", exitHandler);
