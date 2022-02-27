import { Prisma } from '.prisma/client';

export const starships: Prisma.StarshipCreateInput[] = [
  {
    name: 'CR90 corvette',
    model: 'CR90 corvette',
    MGLT: 60,
    cargoCapacity: 3000000,
    crew: null,
  },
  {
    name: 'Star Destroyer',
    model: 'Imperial I-class Star Destroyer',
    MGLT: 60,
    cargoCapacity: 36000000,
    crew: null,
  },
  {
    name: 'Sentinel-class landing craft',
    model: 'Sentinel-class landing craft',
    MGLT: 70,
    cargoCapacity: 180000,
    crew: 5,
  },
  {
    name: 'Death Star',
    model: 'DS-1 Orbital Battle Station',
    MGLT: 10,
    cargoCapacity: 1000000000000,
    crew: null,
  },
  {
    name: 'Millennium Falcon',
    model: 'YT-1300 light freighter',
    MGLT: 75,
    cargoCapacity: 100000,
    crew: 4,
  },
  {
    name: 'Y-wing',
    model: 'BTL Y-wing',
    MGLT: 80,
    cargoCapacity: 110,
    crew: 2,
  },
  {
    name: 'X-wing',
    model: 'T-65 X-wing',
    MGLT: 100,
    cargoCapacity: 110,
    crew: 1,
  },
  {
    name: 'TIE Advanced x1',
    model: 'Twin Ion Engine Advanced x1',
    MGLT: 105,
    cargoCapacity: 150,
    crew: 1,
  },
  {
    name: 'Executor',
    model: 'Executor-class star dreadnought',
    MGLT: 40,
    cargoCapacity: 250000000,
    crew: null,
  },
  {
    name: 'Rebel transport',
    model: 'GR-75 medium transport',
    MGLT: 20,
    cargoCapacity: 19000000,
    crew: 6,
  },
];
