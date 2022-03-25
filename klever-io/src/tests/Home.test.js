import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('renders screen Home page', () => {
  beforeEach(() => {
    const tokens = '[{"token": "KLV", "balance": "15,484.02"}]';
    window.localStorage.setItem('tokens', tokens);
  });

  test('renders logo image', () => {
    render(<App />, { wrapper: MemoryRouter });
    const imageLogo = screen.getByAltText(/logo klever/i);

    expect(imageLogo).toBeInTheDocument();
  });

  test('renders title', () => {
    render(<App />, { wrapper: MemoryRouter });
    const shootingStar = screen.getByAltText(/shooting star/i);
    const text = screen.getByText(/Wish Wallet/i);

    expect(shootingStar).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  test('renders button Add Token', () => {
    render(<App />, { wrapper: MemoryRouter });
    const button = screen.getByText(/Add Token/i);

    expect(button).toBeInTheDocument();
  });

  test('renders title Tokens and Balance', () => {
    render(<App />, { wrapper: MemoryRouter });
    const token = screen.getByText(/Tokens/i);
    const balance = screen.getByText(/Balance/i);

    expect(token).toBeInTheDocument();
    expect(balance).toBeInTheDocument();
  });

  test('renders row tokens', () => {
    render(<App />, { wrapper: MemoryRouter });
    const token = screen.getByText(/Tokens/i);
    const balance = screen.getByText(/Balance/i);
    const imgEdit = screen.getByAltText(/edit icon/i);

    expect(token).toBeInTheDocument();
    expect(balance).toBeInTheDocument();
    expect(imgEdit).toBeInTheDocument();
  });
});
