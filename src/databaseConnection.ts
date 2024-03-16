import dotenv from 'dotenv';
import mongoose, { ConnectOptions } from 'mongoose';

mongoose.Promise = global.Promise;
dotenv.config();

const { DB_HOST } = process.env;

const connectToDatabase = async (): Promise<void> => {
  const options: ConnectOptions = { };

  await mongoose.connect(`${DB_HOST}`, options);
};

export { connectToDatabase };
