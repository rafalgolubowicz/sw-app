import { Person } from '@prisma/client';

import { addPerson } from './people.service';
import { prismaMock } from '../../test/prismaMock';
import { InvalidArgumentException } from '../../exceptions/InvalidArgument.exception';

/*
  Prisma already tests query functions like findMany, findFirst, so testing function which will prisma method without additional logic has no sense.
  Read more: https://www.prisma.io/docs/guides/testing/unit-testing#example-unit-tests
*/
describe('People Service', () => {
  it('should create person', async () => {
    const person = {
      name: 'Luke Skywalker',
      mass: 77,
      height: 172,
      skinColor: 'black',
    };

    prismaMock.person.create.mockResolvedValue(person as Person);

    await expect(addPerson(person)).resolves.toEqual({
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

    await expect(() => addPerson(person)).toThrow(InvalidArgumentException);
  });
});
