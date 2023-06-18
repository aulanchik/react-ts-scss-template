import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

beforeEach(() => {
  console.log('Tidying up...');
  cleanup();
});
