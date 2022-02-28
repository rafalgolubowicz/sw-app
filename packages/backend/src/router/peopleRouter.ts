import KoaRouter from '@koa/router';

import {
  getPeople,
  getPerson,
  createPerson,
  CreatePersonBodySchema,
  GetPeopleQueryParamsSchema,
} from '../controllers/people';
import { API_ROUTES } from './const';
import validateBody from '../middlewares/validateBody';
import validateQueryParams from '../middlewares/validateQueryParams';

const peopleRouter = new KoaRouter({ prefix: API_ROUTES.PEOPLE });

peopleRouter
  .get('/', validateQueryParams(GetPeopleQueryParamsSchema), getPeople)
  .post('/', validateBody(CreatePersonBodySchema), createPerson)
  .get('/:id', getPerson);

export default peopleRouter;
