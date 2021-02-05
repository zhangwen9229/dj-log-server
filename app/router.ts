/// <reference path="../node_modules/egg-socket.io/index.d.ts" />
import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, io } = app;

  router.get('/', controller.home.index);

  router.get('/auth/canReport', controller.api.auth.canReport);

  // router.get('/api/log', controller.api.log.index);
  router.resources('log', '/api/log', controller.api.log);

  // socket.io
  io.of('/').route('exchange', io.controller.nsp.exchange);
};
