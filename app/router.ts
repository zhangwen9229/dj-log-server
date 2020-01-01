import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);

  // router.get('/api/log', controller.api.log.index);
  router.resources('log', '/api/log', controller.api.log);
};
