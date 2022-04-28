import LandingPage from './LandingPage';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

describe('LandingPage', () => {
  test('it renders properly', () => {
    render(<LandingPage />);
  });

  test('it renders users from API response', async () => {
    render(<LandingPage />);

    axios.get = jest
      .fn()
      .mockResolvedValue({ data: [{ id: 1, name: 'test api name' }] });

    const button = await screen.findByTestId('testApiCall');

    act(() => {
      userEvent.click(button);
    });

    const user = await screen.findByRole('listitem');

    expect(user.innerHTML).toEqual('test api name');
  });
});
