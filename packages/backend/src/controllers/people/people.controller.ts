import { StatusCodes } from 'http-status-codes';

import {
  AddPerson,
  GetPeople,
  GetPerson,
  PatchPerson,
  RemovePerson,
} from './types';
import {
  findPeople,
  findPerson,
  createPerson,
  getPeopleCount,
  deletePerson,
  updatePerson,
} from '../../services';
import { PaginatedQuery } from '../../types';

const getPeople: GetPeople = async (ctx, next) => {
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

const getPerson: GetPerson = async (ctx, next) => {
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

const addPerson: AddPerson = async (ctx, next) => {
  try {
    const person = await createPerson(ctx.request.body);

    ctx.body = person;
    ctx.status = StatusCodes.OK;

    return next();
  } catch (err) {
    ctx.status = StatusCodes.BAD_REQUEST;
    ctx.body = err.message;
  }
};

const patchPerson: PatchPerson = async (ctx, next) => {
  try {
    const { id } = ctx.params;
    const person = await updatePerson(+id, ctx.request.body);

    if (!person) {
      ctx.status = StatusCodes.NOT_FOUND;

      return;
    }

    ctx.body = person;
    ctx.status = StatusCodes.OK;

    return next();
  } catch (err) {
    ctx.status = StatusCodes.BAD_REQUEST;
    ctx.body = err.message;
  }
};

const removePerson: RemovePerson = async (ctx, next) => {
  const { id } = ctx.params;
  const deletedPerson = await deletePerson(+id);

  ctx.status = deletedPerson ? StatusCodes.NO_CONTENT : StatusCodes.NOT_FOUND;

  return next();
};

export { getPeople, getPerson, addPerson, patchPerson, removePerson };
