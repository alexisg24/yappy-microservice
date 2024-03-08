import { object, string } from 'zod';

export const yappyButton = object({
  query: object({
    orderId: string({
      required_error: 'OrderId is required',
    }),
    amount: string({
      required_error: 'Amount is required',
    }),
    taxes: string({
      required_error: 'Taxes is required',
    }),
  }),
});
