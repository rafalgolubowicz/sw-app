import { Person } from '@prisma/client';

export type FindPeopleParams = {
  take?: number;
  skip?: number;
};

export type FindPeople = (params: FindPeopleParams) => Promise<Person[]>;
export type FindPerson = (id: number) => Promise<Person | null>;
export type GetPeopleCount = () => Promise<number>;
export type AddPerson = (user: {
  name: string;
  height: number;
  mass: number;
  birthYear?: string;
  eyeColor?: string;
  gender?: string;
  hairColor?: string;
  skinColor?: string;
}) => Promise<Person>;
