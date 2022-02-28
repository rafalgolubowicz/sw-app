import { Person } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';

import { getPeople, getPerson } from './index';
import { prismaMock } from '../../test/prismaMock';
import { createContextMock } from '../../test/contextMock';

describe('People Controller', () => {
  describe('getPeople', () => {
    it('should return empty array', async () => {
      prismaMock.person.findMany.mockResolvedValue([]);
      prismaMock.person.count.mockResolvedValue(0);

      const { ctx, next } = createContextMock();

      await getPeople(ctx, next);

      expect(next).toBeCalled();
      expect(ctx.status).toBe(StatusCodes.OK);
      expect(ctx.body).toStrictEqual({
        items: [],
        count: 0,
      });
    });
  });

  describe('getPerson', () => {
    const person = {
      name: 'Luke Skywalker',
      mass: 77,
      height: 172,
      skinColor: 'black',
    };

    it('should return person', async () => {
      const { ctx, next } = createContextMock();

      ctx.request.query = {
        id: '1',
      };

      prismaMock.person.findUnique.mockResolvedValue(person as Person);
      await getPerson(ctx, next);

      expect(next).toBeCalled();
      expect(ctx.status).toBe(StatusCodes.OK);
      expect(ctx.body).toStrictEqual({
        name: 'Luke Skywalker',
        mass: 77,
        height: 172,
        skinColor: 'black',
      });
    });

    it('should return 404', async () => {
      const { ctx, next } = createContextMock();

      ctx.params = {
        id: '1',
      };

      await getPerson(ctx, next);

      expect(next).toBeCalled();
      expect(ctx.status).toBe(StatusCodes.NOT_FOUND);
      expect(ctx.body).toBe(null);
    });
  });
});
