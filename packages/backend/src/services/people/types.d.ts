import { Person, Prisma } from '@prisma/client';

export type FindPeopleParams = {
  take?: number;
  skip?: number;
};

export type GetPeopleCount = () => Promise<number>;
export type DeletePerson = (id: number) => Promise<Person>;
export type FindPerson = (id: number) => Promise<Person | null>;
export type FindPeople = (params: FindPeopleParams) => Promise<Person[]>;

export type CreatePerson = (
  user: Prisma.PersonUncheckedCreateInput,
) => Promise<Person>;

export type UpdatePerson = (
  id: number,
  person: Prisma.PersonUncheckedUpdateInput,
) => Promise<Person>;
