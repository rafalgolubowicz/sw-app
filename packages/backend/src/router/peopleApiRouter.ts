import KoaRouter from '@koa/router';

import { API_ROUTES } from './const';
import validateQueryParams from '../middlewares/validateQueryParams';
import { getPeople, GetPeopleQueryParamsSchema } from '../controllers/people';

const peopleApiRouter = new KoaRouter({ prefix: API_ROUTES.PEOPLE });

peopleApiRouter.get(
  '/',
  validateQueryParams(GetPeopleQueryParamsSchema),
  getPeople,
);

export default peopleApiRouter;
