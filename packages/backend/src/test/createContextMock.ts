import { ParsedUrlQuery } from 'querystring';
import { KoaContext } from '../types';

type CreateContextMockOptions = {
  body?: any;
  query?: ParsedUrlQuery;
  params?: Record<string, string>;
};

export const createContextMock = ({
  body = null,
  query = {},
  params = {},
}: CreateContextMockOptions = {}) => ({
  ctx: {
    status: null,
    body: null,
    params,
    request: {
      body,
      query,
    },
  } as unknown as KoaContext<any>,
  next: jest.fn(),
});
