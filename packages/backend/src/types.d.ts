import { DefaultContext, DefaultState, ParameterizedContext } from 'koa';

export type PaginatedResult<T> = {
  items: T[];
  count: number;
};

export type PaginatedQuery = {
  take?: number;
  skip?: number;
};

export type ContextWithPaginatedResponse<T> = ParameterizedContext<
  DefaultState,
  DefaultContext,
  PaginatedResult<T>
>;
