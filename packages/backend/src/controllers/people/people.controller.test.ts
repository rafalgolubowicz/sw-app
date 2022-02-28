import { Person } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';

import {
  addPerson,
  getPeople,
  getPerson,
  patchPerson,
  removePerson,
} from './people.controller';
import { createMockPerson } from '../../test/helpers';
import { prismaMock } from '../../test/prismaMock';
import { createContextMock } from '../../test/createContextMock';

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
    const person = createMockPerson();

    it('should return person', async () => {
      const { ctx, next } = createContextMock({
        query: {
          id: '1',
        },
      });

      prismaMock.person.findUnique.mockResolvedValue(person);

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
      const { ctx, next } = createContextMock({
        params: {
          id: '1',
        },
      });

      await getPerson(ctx, next);

      expect(next).toBeCalled();
      expect(ctx.status).toBe(StatusCodes.NOT_FOUND);
      expect(ctx.body).toBe(null);
    });
  });

  describe('createPerson', () => {
    const person = createMockPerson();

    it('should create and return person', async () => {
      const { ctx, next } = createContextMock({ body: person });
      prismaMock.person.create.mockResolvedValue(person);

      await addPerson(ctx, next);

      expect(next).toBeCalled();
      expect(ctx.status).toBe(StatusCodes.OK);
      expect(ctx.body).toStrictEqual({
        name: 'Luke Skywalker',
        mass: 77,
        height: 172,
        skinColor: 'black',
      });
    });

    describe('should return 400', () => {
      it('if mass is negative', async () => {
        const { ctx, next } = createContextMock({
          body: { ...person, mass: -10 },
        });

        await addPerson(ctx, next);

        expect(ctx.status).toBe(StatusCodes.BAD_REQUEST);
        expect(ctx.body).toBe('Height or mass cannot be a negative number.');
      });

      it('if height is negative', async () => {
        const { ctx, next } = createContextMock({
          body: { ...person, height: -10 },
        });

        await addPerson(ctx, next);

        expect(ctx.status).toBe(StatusCodes.BAD_REQUEST);
        expect(ctx.body).toBe('Height or mass cannot be a negative number.');
      });
    });
  });

  describe('patchPerson', () => {
    const person = createMockPerson();

    it('should update and return person', async () => {
      const { ctx, next } = createContextMock({
        params: {
          id: '1',
        },
        body: person,
      });

      prismaMock.person.update.mockResolvedValue(person);

      await patchPerson(ctx, next);

      expect(next).toBeCalled();
      expect(ctx.status).toBe(StatusCodes.OK);
      expect(ctx.body).toStrictEqual({
        name: 'Luke Skywalker',
        mass: 77,
        height: 172,
        skinColor: 'black',
      });
    });

    describe('should return 400', () => {
      it('if mass is negative', async () => {
        const { ctx, next } = createContextMock({
          params: {
            id: '1',
          },
          body: { ...person, mass: -10 },
        });

        await patchPerson(ctx, next);

        expect(ctx.status).toBe(StatusCodes.BAD_REQUEST);
        expect(ctx.body).toBe('Height or mass cannot be a negative number.');
      });

      it('if height is negative', async () => {
        const { ctx, next } = createContextMock({
          params: {
            id: '1',
          },
          body: { ...person, height: -10 },
        });

        await patchPerson(ctx, next);

        expect(ctx.status).toBe(StatusCodes.BAD_REQUEST);
        expect(ctx.body).toBe('Height or mass cannot be a negative number.');
      });
    });
  });

  describe('removePerson', () => {
    it('should remove person', async () => {
      const { ctx, next } = createContextMock({
        params: {
          id: '1',
        },
      });

      prismaMock.person.delete.mockResolvedValue({} as Person);

      await removePerson(ctx, next);

      expect(next).toBeCalled();
      expect(ctx.status).toBe(StatusCodes.NO_CONTENT);
    });

    it('should return 404 - person not found', async () => {
      const { ctx, next } = createContextMock();

      await removePerson(ctx, next);

      expect(ctx.status).toBe(StatusCodes.NOT_FOUND);
    });
  });
});
