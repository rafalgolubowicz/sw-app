import { Next } from 'koa';
import { Person } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';

import { GetPeopleQueryParams } from './types';
import { ContextWithPaginatedResponse } from '../../types';
import { findPeople, getPeopleCount } from '../../services';

const getPeople = async (
  ctx: ContextWithPaginatedResponse<Person>,
  next: Next,
) => {
  const { skip, take } = ctx.request.query as GetPeopleQueryParams;

  const people = await findPeople({ skip, take });

  const peopleCount = await getPeopleCount();

  ctx.status = StatusCodes.OK;
  ctx.body = {
    items: people,
    count: peopleCount,
  };

  next();
};

export { getPeople };

export * from './schema';
