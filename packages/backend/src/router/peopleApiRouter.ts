import KoaRouter from '@koa/router';
import { getPeopleController } from '../controllers';
import { API_ROUTES } from './const';

const peopleApiRouter = new KoaRouter({ prefix: API_ROUTES.PEOPLE });

peopleApiRouter.get('/', getPeopleController);

export default peopleApiRouter;
