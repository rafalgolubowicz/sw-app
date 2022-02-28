import { Next } from 'koa';
import { Person } from '@prisma/client';

import { ContextWithPaginatedResponse, KoaContext } from '../../types';

export type GetPeople = (
  ctx: ContextWithPaginatedResponse<Person>,
  next: Next,
) => ReturnType<Next>;

export type AddPerson = (
  ctx: KoaContext<Person>,
  next: Next,
) => ReturnType<Next>;

export type PatchPerson = (
  ctx: KoaContext<Person>,
  next: Next,
) => ReturnType<Next>;

export type GetPerson = (ctx: KoaContext, next: Next) => ReturnType<Next>;
export type RemovePerson = (ctx: KoaContext, next: Next) => ReturnType<Next>;
