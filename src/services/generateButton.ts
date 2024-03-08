import path from 'path';
import fs from 'fs';
import Handlebars from 'handlebars';
import { serverErrorsHandler } from '../utils/serverErrorsHandler';
import { Request, Response } from 'express';

export const buttonController = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { orderId, amount, taxes } = req.query;
    const filePath = path.join(__dirname, '../../../templates/YappyButton.html');
    const source = fs.readFileSync(filePath, 'utf-8').toString();
    const template = Handlebars.compile(source);
    const templateData = {
      amount,
      orderId,
      taxes,
    };
    const htmlToSend = template(templateData);
    return res.status(200).send(htmlToSend);
  } catch (error) {
    return serverErrorsHandler(error, req, res);
  }
};
