import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import { Request, Response, ErrorRequestHandler } from 'express';
import { AppDataSource } from './data-source';
import { Routes } from './routes';
import { User } from './entity/User';
import { Cheep } from './entity/Cheep';
import { port } from './config';

const handleError: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500).send({ message: err.message });
};

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    app.use(morgan('tiny'));
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach(route => {
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

    const user1 = AppDataSource.manager.create(User, {
      userName: 'Test1',
      firstName: 'Timber',
      lastName: 'Saw',
      email: 'test1@email.com',
    });

    await AppDataSource.manager.save(user1);

    await AppDataSource.manager.save(
      AppDataSource.manager.create(User, {
        userName: 'Test2',
        firstName: 'Phantom',
        lastName: 'Assassin',
        email: 'test2@email.com',
      })
    );

    let cheep1 = AppDataSource.manager.create(Cheep, {
      content: 'Test cheep 1',
      user: user1,
    });

    cheep1 = await AppDataSource.manager.save(cheep1);

    const cheep2 = AppDataSource.manager.create(Cheep, {
      content: 'Reply to cheep 1',
      user: user1,
      replyTo: cheep1,
    });

    await AppDataSource.manager.save(cheep2);

    console.log(`Express server has started on port ${port}.`);
  })
  .catch(error => console.log(error));
