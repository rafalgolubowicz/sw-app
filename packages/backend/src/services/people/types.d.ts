import { Person } from '@prisma/client';

export type FindPeopleParams = {
  take?: number;
  skip?: number;
};

export type FindPeople = (params: FindPeopleParams) => Promise<Person[]>;
export type FindPerson = (id: number) => Promise<Person | null>;
export type GetPeopleCount = () => Promise<number>;
