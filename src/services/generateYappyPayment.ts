/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response } from 'express';
import { createClient } from 'yappy-node-back-sdk';
import { PaymentInfo } from 'yappy-node-back-sdk/dist/types/common/main';
import { errorJson } from '../utils/errorJson';
import { serverErrorsHandler } from '../utils/serverErrorsHandler';

export const yappyClient = createClient(process.env.YAPPY_MERCHANT_ID ?? '', process.env.YAPPY_SECRET_KEY ?? '');

export const generatePayment = async (req: Request, res: Response) => {
  try {
    const { orderId, amount, taxes } = req.body;
    if (orderId || amount || taxes) return errorJson('Invalid order');
    //Can implements axios logic here
    const payment: PaymentInfo = {
      total: parseFloat(amount) + parseFloat(taxes),
      subtotal: parseFloat(amount),
      shipping: 0.0,
      discount: 0.0,
      taxes: parseFloat(taxes),
      orderId: orderId,
      successUrl: `${process.env.DOMAIN}/successPayment`,
      failUrl: `${process.env.DOMAIN}/failedPayment`,
      tel: process.env.YAPPY_PHONE,
      domain: process.env.DOMAIN ?? '',
    };

    console.log(payment);
    
    // const response = await yappyClient.getPaymentUrl(payment, false, true) // Pago normal, en modo prueba
    const response = await yappyClient.getPaymentUrl(payment, false); // Pago normal, en modo normal
    console.log({response});
    if (response.success) {
      return res.status(301).redirect(response?.url ?? '');
    } else {
      return res.status(500).json(errorJson(response.error?.message ?? 'Error al realizar la orden'));
    }
  } catch (error) {
    return serverErrorsHandler(error, req, res);
  }
};
