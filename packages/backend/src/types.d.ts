import { RouterParamContext } from '@koa/router';
import { DefaultContext, DefaultState, ParameterizedContext } from 'koa';

export type PaginatedResult<T> = {
  items: T[];
  count: number;
};

export type PaginatedQuery = {
  take?: number;
  skip?: number;
};

export type KoaContext<T = unknown> = ParameterizedContext<
  DefaultState,
  DefaultContext & RouterParamContext<DefaultState, DefaultContext>,
  T
>;

export type ContextWithPaginatedResponse<T> = KoaContext<PaginatedResult<T>>;
