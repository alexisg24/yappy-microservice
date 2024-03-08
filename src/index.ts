import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { errorJson } from './utils/errorJson';
import { yappyRouter } from './routers/yappyRouter';

dotenv.config();

const server = express();

const PORT = process.env.PORT || 3000;
server.disable('x-powered-by');
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.static('public'));
server.use('/api', yappyRouter);
server.use('/', (_, res) => res.status(301).redirect(process.env.LANDING_URL ?? ''));
server.use('/successPayment', (_, res) => res.status(301).redirect(process.env.SUCCESS_URL ?? ''));
server.use('/failedPayment', (_, res) => res.status(301).redirect(process.env.FAIL_URL ?? ''));

server.use('*', (_, res) => res.status(404).json(errorJson('Route not found')));

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
