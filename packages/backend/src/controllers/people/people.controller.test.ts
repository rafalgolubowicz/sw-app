import { Person } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';

import { prismaMock } from '../../test/prismaMock';
import { createContextMock } from '../../test/contextMock';
import { createPerson, getPeople, getPerson } from './people.controller';

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
      prismaMock.person.findUnique.mockResolvedValue(person as Person);

      ctx.request.query = {
        id: '1',
      };

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

  describe('createPerson', () => {
    const person = {
      name: 'Luke Skywalker',
      mass: 77,
      height: 172,
      skinColor: 'black',
    };

    it('should create person', async () => {
      const { ctx, next } = createContextMock();
      prismaMock.person.create.mockResolvedValue(person as Person);

      ctx.body = person;

      await createPerson(ctx, next);

      expect(next).toBeCalled();
      expect(ctx.status).toBe(StatusCodes.OK);
      expect(ctx.body).toStrictEqual({
        name: 'Luke Skywalker',
        mass: 77,
        height: 172,
        skinColor: 'black',
      });
    });

    it('should throw 404 if mass is negative', async () => {
      const { ctx, next } = createContextMock();

      ctx.body = { ...person, mass: -10 };

      await createPerson(ctx, next);

      expect(ctx.status).toBe(StatusCodes.BAD_REQUEST);
      expect(ctx.body).toBe('Height or mass cannot be a negative number.');
    });

    it('should throw 404 if height is negative', async () => {
      const { ctx, next } = createContextMock();

      ctx.body = { ...person, height: -10 };

      await createPerson(ctx, next);

      expect(ctx.status).toBe(StatusCodes.BAD_REQUEST);
      expect(ctx.body).toBe('Height or mass cannot be a negative number.');
    });
  });
});
