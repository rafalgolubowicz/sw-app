import { Person } from '@prisma/client';

const createMockPerson = (person: Partial<Person> = {}) =>
  ({
    name: 'Luke Skywalker',
    mass: 77,
    height: 172,
    skinColor: 'black',
    ...person,
  } as Person);

export { createMockPerson };
