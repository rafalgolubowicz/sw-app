import { Next } from 'koa';
import { Person } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';

import {
  ContextWithPaginatedResponse,
  KoaContext,
  PaginatedQuery,
} from '../../types';
import { findPeople, findPerson, getPeopleCount } from '../../services';

const getPeople = async (
  ctx: ContextWithPaginatedResponse<Person>,
  next: Next,
) => {
  const { skip, take } = ctx.request.query as PaginatedQuery;

  const people = await findPeople({ skip, take });
  const peopleCount = await getPeopleCount();

  ctx.status = StatusCodes.OK;
  ctx.body = {
    items: people,
    count: peopleCount,
  };

  return next();
};

const getPerson = async (ctx: KoaContext, next: Next) => {
  const { id } = ctx.params;

  const person = await findPerson(+id);

  if (!person) {
    ctx.status = StatusCodes.NOT_FOUND;

    return next();
  }

  ctx.status = StatusCodes.OK;
  ctx.body = person;

  return next();
};

export { getPeople, getPerson };

export * from './schema';
