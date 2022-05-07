import { render } from '@testing-library/react';
import App from './App';

jest.mock('axios');

describe('App', () => {
  test('that it renders', async () => {
    render(<App />);
  });
});
