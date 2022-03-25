import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AddToken from '../pages/addToken/AddToken';

describe('renders screen Add Token page', () => {
  test('renders logo image', () => {
    render(<AddToken />, { wrapper: MemoryRouter });
    const imageLogo = screen.getByAltText(/logo klever/i);

    expect(imageLogo).toBeInTheDocument();
  });

  test('renders title', () => {
    render(<AddToken />, { wrapper: MemoryRouter });
    const shootingStar = screen.getByAltText(/shooting star/i);
    const text = screen.getByText(/Wish Wallet/i);
    const addToken = screen.getByText(/Add Token/i);

    expect(shootingStar).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(addToken).toBeInTheDocument();
  });

  test('renders inputs', () => {
    render(<AddToken />, { wrapper: MemoryRouter });
    const inputToken = screen.getByLabelText(/token/i);
    const inputBalance = screen.getByLabelText(/balance/i);

    expect(inputToken).toBeInTheDocument();
    expect(inputBalance).toBeInTheDocument();
  });

  test('renders buttons', () => {
    render(<AddToken />, { wrapper: MemoryRouter });
    const btnBack = screen.getByText(/Voltar/i);
    const btnSave = screen.getByText(/Save/i);

    expect(btnBack).toBeInTheDocument();
    expect(btnSave).toBeInTheDocument();
  });
});
