import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const apiMock = new MockAdapter(axios, { onNoMatch: 'throwException' });

apiMock.onGet('/people').reply(200, {
  count: 5,
  items: [
    {
      id: 1,
      name: 'Luke Skywalker',
      height: 172,
      mass: 77,
      birthYear: '19BBY',
      eyeColor: 'blue',
      gender: 'male',
      hairColor: 'blond',
      skinColor: 'fair',
    },
    {
      id: 2,
      name: 'C-3PO',
      height: 167,
      mass: 75,
      birthYear: '112BBY',
      eyeColor: 'yellow',
      skinColor: 'gold',
    },
    {
      id: 3,
      name: 'R2-D2',
      height: 96,
      mass: 32,
      birthYear: '33BBY',
      eyeColor: 'red',
      skinColor: 'white, blue',
    },
    {
      id: 4,
      name: 'Darth Vader',
      height: 202,
      mass: 136,
      birthYear: '41.9BBY',
      eyeColor: 'yellow',
      gender: 'male',
      hairColor: 'none',
      skinColor: 'white',
    },
    {
      id: 5,
      name: 'Leia Organa',
      height: 150,
      mass: 49,
      birthYear: '19BBY',
      eyeColor: 'brown',
      gender: 'female',
      hairColor: 'brown',
      skinColor: 'light',
    },
  ],
});

export default apiMock;
