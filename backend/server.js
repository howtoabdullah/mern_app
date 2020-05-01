import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import config from './config';
import router from './router';

// Create express app
const app = express();

// Configure mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

// Express middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure cors
app.use(cors());

// App router
router(app);

// Start server
app.listen(config.PORT, config.HOST, () => {
  console.log('***********');
  console.log(`${config.ENV} environment`);
  console.log(`The server is running on port ${config.PORT}`);
  console.log('***********');
});
