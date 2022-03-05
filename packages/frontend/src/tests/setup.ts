import '@testing-library/jest-dom';

import { cleanup } from '@testing-library/react';
import apiMock from './apiMock';

window.matchMedia =
  window.matchMedia ||
  (() => ({
    matches: false,
    addListener: function () {},
    removeListener: function () {},
  }));

beforeAll(() => {
  apiMock.reset();
});

afterEach(cleanup);
