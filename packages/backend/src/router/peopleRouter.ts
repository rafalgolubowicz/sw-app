import KoaRouter from '@koa/router';

import { API_ROUTES } from './const';
import validateQueryParams from '../middlewares/validateQueryParams';
import {
  getPeople,
  GetPeopleQueryParamsSchema,
  getPerson,
} from '../controllers/people';

const peopleRouter = new KoaRouter({ prefix: API_ROUTES.PEOPLE });

peopleRouter
  .get('/', validateQueryParams(GetPeopleQueryParamsSchema), getPeople)
  .get('/:id', getPerson);

export default peopleRouter;
