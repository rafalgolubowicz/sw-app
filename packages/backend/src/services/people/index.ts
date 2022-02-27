import prisma from '../../setup/prisma';
import { FindPeople, GetPeopleCount, FindPerson } from './types';

const findPeople: FindPeople = ({ take = 10, skip = 0 }) =>
  prisma.person.findMany({ skip: +skip, take: +take });

const findPerson: FindPerson = (id) =>
  prisma.person.findUnique({ where: { id } });

const getPeopleCount: GetPeopleCount = () => prisma.person.count();

export { findPeople, findPerson, getPeopleCount };
