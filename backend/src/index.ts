import * as express from "express";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import * as cors from "cors";
import { ErrorRequestHandler } from "express";
import { AppDataSource } from "./data-source";
import { router } from "./routes";
import { port } from "./config";

const handleError: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500).send({ message: err.message });
};

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    app.use(morgan("tiny"));
    app.use(
      cors({
        origin: "http://localhost:3000",
      })
    );
    app.use(bodyParser.json());

    // register express routes from defined application routes
    app.use(router);

    // setup express app here
    // ...

    // start express server

    app.use(handleError);
    app.listen(port);

    console.log(`Express server has started on port ${port}.`);
  })
  .catch((error) => console.log(error));
