import { PrismaClient } from '@prisma/client';

import { people } from './people';
import { starships } from './starships';

const prisma = new PrismaClient();

const seedPeople = async () => {
  if ((await prisma.person.count()) > 0) {
    // No need to seed data
    return;
  }

  console.log('Seeding people...');

  for (const person of people) {
    await prisma.person.create({
      data: person,
    });
  }

  console.log('Seeding people finished.');
};

const seedStarships = async () => {
  if ((await prisma.starship.count()) > 0) {
    // No need to seed data
    return;
  }

  console.log('Seeding starships...');

  for (const starship of starships) {
    await prisma.starship.create({
      data: starship,
    });
  }

  console.log('Seeding starships finished.');
};

const seed = async () => {
  console.log('Start seeding...');

  await seedPeople();
  await seedStarships();

  console.log('Seeding finished.');
};

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
