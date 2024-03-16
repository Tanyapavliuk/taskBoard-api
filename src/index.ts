import dotenv from 'dotenv';
import express from 'express';

import { boardRoute } from './routes/board.route';
import { taskRoute } from './routes/task.route';
import { connectToDatabase } from './databaseConnection';

dotenv.config();

const HOST = process.env.HOST || 'http://localhost';
const PORT = parseInt(process.env.PORT || '4500');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', boardRoute());
app.use('/', taskRoute());


app.listen(PORT, async () => {
  await connectToDatabase();

  console.log(`Application started on URL ${HOST}:${PORT} 🎉`);
});
