import {
  FindPeople,
  GetPeopleCount,
  FindPerson,
  CreatePerson,
  DeletePerson,
  UpdatePerson,
} from './types';
import prisma from '../../setup/prisma';
import { InvalidArgumentException } from '../../exceptions/InvalidArgument.exception';

const findPeople: FindPeople = ({ take = 10, skip = 0 }) =>
  prisma.person.findMany({ skip: +skip, take: +take });

const findPerson: FindPerson = (id) =>
  prisma.person.findUnique({ where: { id } });

const getPeopleCount: GetPeopleCount = () => prisma.person.count();

const createPerson: CreatePerson = (person) => {
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

const deletePerson: DeletePerson = (id) =>
  prisma.person.delete({
    where: {
      id,
    },
  });

const updatePerson: UpdatePerson = (id, person) => {
  if (
    (person.mass && person.mass < 0) ||
    (person.height && person.height <= 0)
  ) {
    throw new InvalidArgumentException(
      'Height or mass cannot be a negative number.',
    );
  }

  return prisma.person.update({
    where: { id },
    data: {
      name: person.name,
      height: person.height,
      mass: person.mass,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor,
      gender: person.gender,
      hairColor: person.hairColor,
      skinColor: person.skinColor,
      updatedAt: new Date(),
    },
  });
};
export {
  findPeople,
  findPerson,
  getPeopleCount,
  createPerson,
  updatePerson,
  deletePerson,
};
