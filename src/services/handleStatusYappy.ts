import { Request, Response } from 'express';
import { ValidatorParams } from 'yappy-node-back-sdk/dist/types/common/main';
import { yappyClient } from './generateYappyPayment';

export const handleStatusYappy = async (req: Request<any, any, any, ValidatorParams>, _: Response): Promise<void> => {
  const success = yappyClient.validateHash(req.query);
  if (success) {
    try {
      const { orderId = '', status } = req.query;
      if (status === 'E') {
        //Can implements axios logic here
        console.log(`Pago de orden ${orderId}, Ejecutado y actualizado!`);
      } else if (status === 'R') {
        //Can implements axios logic here
        console.log(`Pago de orden ${orderId}, Rechazado`);
      } else {
        //Can implements axios logic here
        console.log(`Pago de orden ${orderId}, Cancelado`);
      }
    } catch (error) {
      //Can implements axios logic here
      console.log(error);
    }
  } else {
    console.log('Hash de pago invalido! revisar request');
  }
};
