import { Person } from '@prisma/client';

import { prismaMock } from '../../test/prismaMock';
import { createPerson, deletePerson, updatePerson } from './people.service';
import { InvalidArgumentException } from '../../exceptions/InvalidArgument.exception';

/*
  Prisma already tests query functions like findMany, findFirst, so testing function which will prisma method without additional logic has no sense.
  Read more: https://www.prisma.io/docs/guides/testing/unit-testing#example-unit-tests
*/
describe('People Service', () => {
  const person = {
    name: 'Luke Skywalker',
    mass: 77,
    height: 172,
    skinColor: 'black',
  };

  describe('createPerson', () => {
    it('should return created person', async () => {
      prismaMock.person.create.mockResolvedValue(person as Person);

      await expect(createPerson(person)).resolves.toEqual({
        name: 'Luke Skywalker',
        mass: 77,
        height: 172,
        skinColor: 'black',
      });
    });

    it('should throw InvalidArgumentException', async () => {
      const person = {
        name: 'Luke Skywalker',
        mass: -77,
        height: 0,
        skinColor: 'black',
      };

      await expect(() => createPerson(person)).toThrow(
        InvalidArgumentException,
      );
    });
  });

  describe('deletePerson', () => {
    it('should return removed person', async () => {
      prismaMock.person.delete.mockResolvedValue({
        ...person,
        id: 1,
      } as Person);

      await expect(deletePerson(1)).resolves.toEqual({
        id: 1,
        name: 'Luke Skywalker',
        mass: 77,
        height: 172,
        skinColor: 'black',
      });
    });

    it('should return undefined - person not exist', async () => {
      await expect(deletePerson(1)).toBe(undefined);
    });
  });

  describe('updatePerson', () => {
    it('should return updated person', async () => {
      prismaMock.person.update.mockResolvedValue(person as Person);

      await expect(updatePerson(1, person)).resolves.toEqual({
        name: 'Luke Skywalker',
        mass: 77,
        height: 172,
        skinColor: 'black',
      });
    });

    it('should return undefined - person not exist', async () => {
      await expect(updatePerson(1, person)).toBe(undefined);
    });

    it('should throw InvalidArgumentException', async () => {
      const person = {
        name: 'Luke Skywalker',
        mass: -77,
        height: 0,
        skinColor: 'black',
      };

      await expect(() => updatePerson(1, person)).toThrow(
        InvalidArgumentException,
      );
    });
  });
});
