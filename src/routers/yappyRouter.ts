import { Router } from 'express';
import { validateZod } from '../utils/validateSchemas';
import { yappyButton } from '../schemas/yappyButton.schema';
import { buttonController } from '../services/generateButton';
import { yappyForm } from '../schemas/yappyForm.schema';
import { generatePayment } from '../services/generateYappyPayment';
import { handleStatusYappy } from '../services/handleStatusYappy';

const yappyRouter = Router();

yappyRouter.get('/button', validateZod(yappyButton), buttonController);
yappyRouter.post('/yappygenerate', validateZod(yappyForm), generatePayment);
yappyRouter.get('/pagosbg', handleStatusYappy);

export { yappyRouter };
