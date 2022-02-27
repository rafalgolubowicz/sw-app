import KoaRouter from '@koa/router';

import { API_ROUTES } from './const';
import { getPeopleController } from '../controllers';

const peopleApiRouter = new KoaRouter({ prefix: API_ROUTES.PEOPLE });

peopleApiRouter.get('/', getPeopleController);

export default peopleApiRouter;
