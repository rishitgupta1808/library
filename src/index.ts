import { createConnection, getConnection, DataSourceOptions } from "typeorm";
import { startApp } from "./app";
import orrmConfig from "../ormconfig";


const port = 8080;

let server : any;

console.log("orrmConfig", orrmConfig, port)

createConnection(orrmConfig as DataSourceOptions)
    .then(async () => {
      console.log('Connected to Database');
      server = startApp(port)
  })
  .catch(err=>console.log(err))

const exitHandler = (error: any) => {
  if (error instanceof Error) {
    console.error(error);
  } else {
    console.log(`Received ${error}.`);
  }

  if (server) {
    server.close(() => {
      console.log('Server closed');
      getConnection().close().then(() => {
        console.log('Typeorm connection closed');
        process.exit(1);
      });
    });
  } else {
    process.exit(1);
  }
};

process.on('uncaughtException', exitHandler);
process.on('unhandledRejection', exitHandler);

process.on('SIGINT', exitHandler);
process.on('SIGTERM', exitHandler);