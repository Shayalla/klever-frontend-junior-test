import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('renders screen Edit Token page', () => {
  beforeEach(() => {
    window.localStorage.setItem('tokens', '[{"token": "KLV", "balance": "15,484.02"}]')
  });

  test('renders logo image', () => {
    render(<App />, { wrapper: MemoryRouter });
    const imageLogo = screen.getByAltText(/edit icon/i);
    fireEvent.click(imageLogo);

    const image = screen.getByAltText(/logo klever/i);

    expect(image).toBeInTheDocument();
  });

  test('renders title', () => {
    render(<App />, { wrapper: MemoryRouter });
    const imageLogo = screen.getByAltText(/edit icon/i);
    fireEvent.click(imageLogo);

    const shootingStar = screen.getByAltText(/shooting star/i);
    const text = screen.getByText(/Wish Wallet/i);
    const editToken = screen.getByText(/Edit Token/i);


    expect(shootingStar).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(editToken).toBeInTheDocument();
  });

  test('renders inputs', () => {
    render(<App />, { wrapper: MemoryRouter });
    const imageLogo = screen.getByAltText(/edit icon/i);
    fireEvent.click(imageLogo);

    const inputToken = screen.getByLabelText(/token/i);
    const inputBalance = screen.getByLabelText(/balance/i);

    expect(inputToken).toBeInTheDocument();
    expect(inputBalance).toBeInTheDocument();
  });

  test('renders buttons', () => {
    render(<App />, { wrapper: MemoryRouter });
    const imageLogo = screen.getByAltText(/edit icon/i);
    fireEvent.click(imageLogo);

    const btnBack = screen.getByText(/Voltar/i);
    const btnSave = screen.getByText(/Save/i);
    const btnRemove = screen.getByText(/Remove/i);

    expect(btnBack).toBeInTheDocument();
    expect(btnSave).toBeInTheDocument();
    expect(btnRemove).toBeInTheDocument();
  });
});
