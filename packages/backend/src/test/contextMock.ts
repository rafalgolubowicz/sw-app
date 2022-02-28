import { KoaContext } from 'src/types';

export const createContextMock = () => ({
  ctx: {
    status: null,
    body: null,
    params: {},
    request: {
      query: {},
    },
  } as unknown as KoaContext<any>,
  next: jest.fn(),
});
