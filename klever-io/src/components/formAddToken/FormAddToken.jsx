import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function FormAddToken() {
  const [token, setToken] = useState('');
  const [balance, setBalance] = useState('');
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  const handleChange = ({ target: { name, value } }) => {
    name === "token"
      ? setToken(value)
      : setBalance(value);
  };

  const saveToken = () => {
    if (!token || !balance) return alert("Campos Obrigatórios");

    const loadStorage = JSON.parse(localStorage.getItem('tokens'));
    const notUnique = loadStorage.some((elem) => elem.token === token);
    if (notUnique) return alert("Já existe token adicionado!");
    
    loadStorage.push({ token, balance });
    localStorage.setItem('tokens', JSON.stringify(loadStorage));
    goHome();
  };

  return (
    <form>
      <div className="title-form">
        <h3>Add Token</h3>
        <button
          type="button"
          className="btn-back"
          onClick={ goHome }
        >
          Voltar
        </button>
      </div>
      <label htmlFor="token">
        Token
      </label>
      <input
        type="text"
        id="token"
        name="token"
        onChange={ handleChange }
      />
      <label htmlFor="balance">
        Balance
      </label>
      <input
        type="text"
        id="balance"
        name="balance"
        onChange={ handleChange }
      />
      <div className="btn-save">
        <button
          type="button"
          onClick={ saveToken }
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default FormAddToken;