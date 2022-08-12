import * as express from "express";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import { Request, Response, ErrorRequestHandler } from "express";
import { AppDataSource } from "./data-source";
import { Routes } from "./routes";
import { User } from "./entity/User";
import { port } from "./config";

const handleError: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500).send({ message: err.message });
};

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    app.use(morgan("tiny"));
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach((route) => {
      (app as any)[route.method](
        route.route,
        async (req: Request, res: Response, next: Function) => {
          try {
            const result = await new (route.controller as any)()[route.action](
              req,
              res,
              next
            );
            res.json(result);
          } catch (error) {
            next(error);
          }
        }
      );
    });

    // setup express app here
    // ...

    // start express server

    app.use(handleError);
    app.listen(port);

    // insert new users for test
    // await AppDataSource.manager.clear(User);

    await AppDataSource.manager.save(
      AppDataSource.manager.create(User, {
        userName: "Test1",
        firstName: "Timber",
        lastName: "Saw",
        email: "test1@email.com",
      })
    );

    await AppDataSource.manager.save(
      AppDataSource.manager.create(User, {
        userName: "Test2",
        firstName: "Phantom",
        lastName: "Assassin",
        email: "test2@email.com",
      })
    );

    console.log(`Express server has started on port ${port}.`);
  })
  .catch((error) => console.log(error));
