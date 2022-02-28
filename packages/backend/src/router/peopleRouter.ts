import KoaRouter from '@koa/router';

import {
  getPeople,
  getPerson,
  addPerson,
  patchPerson,
  removePerson,
  AddPersonBodySchema,
  PatchPersonBodySchema,
  GetPeopleQueryParamsSchema,
} from '../controllers/people';
import { API_ROUTES } from './const';
import validateBody from '../middlewares/validateBody';
import validateQueryParams from '../middlewares/validateQueryParams';

const peopleRouter = new KoaRouter({ prefix: API_ROUTES.PEOPLE });

peopleRouter
  .get('/', validateQueryParams(GetPeopleQueryParamsSchema), getPeople)
  .get('/:id', getPerson)
  .post('/', validateBody(AddPersonBodySchema), addPerson)
  .patch('/:id', validateBody(PatchPersonBodySchema), patchPerson)
  .delete('/:id', removePerson);

export default peopleRouter;
