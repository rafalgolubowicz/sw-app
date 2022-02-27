import { StatusCodes } from 'http-status-codes';
import { Next, ParameterizedContext } from 'koa';
import { getPeople } from '../services';

const getPeopleController = async (ctx: ParameterizedContext, next: Next) => {
  const people = await getPeople();

  ctx.status = StatusCodes.OK;
  ctx.body = people;
  next();
};

export { getPeopleController };
