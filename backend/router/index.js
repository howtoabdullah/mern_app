import playersRouter from './playersRoutes';

const router = (app) => {
  app.use('/players', playersRouter);

  app.get('/', (req, res) => {
    res.send('hello');
  });
};

export default router;
