import express from 'express';
const app = express();
const port = 3000;
import bodyParser from "body-parser";
import cors from "cors";
import { tansferDataFromCSVToTable } from './helper/tranferCsvToTable';
import morgan from './config/logger';

app.use(express.json()); // Middleware to parse JSON bodies

app.use(cors());
http: app.options("*", cors());

// parse application/json
app.use(bodyParser.json({ limit: "50mb" }));

//logger
app.use(morgan(':time :method :url :status :response-time ms - :res[content-length] - :req-body'));


//initiate functions before route
//app.use('/api', require('./api'))

app.get('/tranasfer-data', tansferDataFromCSVToTable)


export const startApp = (port: number) => app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
});
