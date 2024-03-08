import { Request, Response } from 'express';
import { errorJson } from './errorJson';

export const serverErrorsHandler = (err: unknown, _req: Request, res: Response): Response => {
  return res.status(500).json(errorJson('Internal Server Error'));
};
