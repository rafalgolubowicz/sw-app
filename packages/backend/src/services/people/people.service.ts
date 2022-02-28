import prisma from '../../setup/prisma';
import { FindPeople, GetPeopleCount, FindPerson, AddPerson } from './types';
import { InvalidArgumentException } from '../../exceptions/InvalidArgument.exception';

const findPeople: FindPeople = ({ take = 10, skip = 0 }) =>
  prisma.person.findMany({ skip: +skip, take: +take });

const findPerson: FindPerson = (id) =>
  prisma.person.findUnique({ where: { id } });

const getPeopleCount: GetPeopleCount = () => prisma.person.count();

const addPerson: AddPerson = (person) => {
  if (person.mass < 0 || person.height <= 0) {
    throw new InvalidArgumentException(
      'Height or mass cannot be a negative number.',
    );
  }

  return prisma.person.create({
    data: {
      name: person.name,
      height: person.height,
      mass: person.mass,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor,
      gender: person.gender,
      hairColor: person.hairColor,
      skinColor: person.skinColor,
    },
  });
};

export { findPeople, findPerson, getPeopleCount, addPerson };
