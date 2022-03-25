import React, { useState } from 'react';
import { useNavigate } from 'react-router';


function FormEditToken({ token }) {
  const navigate = useNavigate();
  const loadStorage = JSON.parse(localStorage.getItem('tokens'));
  const [filtered] = loadStorage.filter((elem) => elem.token === token);
  const index = loadStorage.indexOf(filtered);
  const [editToken, setEditToken] = useState(token);
  const [editBalance, setEditBalance] = useState(filtered.balance);
  
  const goHome = () => {
    navigate('/');
  };

  const handleChange = ({ target: { name, value } }) => {
    name === "token"
      ? setEditToken(value)
      : setEditBalance(value);
  };

  const saveToken = () => {
    loadStorage[index] = { token: editToken, balance: editBalance };
    localStorage.setItem('tokens', JSON.stringify(loadStorage));
    goHome();
  };

  const removeToken = () => {
    const result = window.confirm('Excluir Token?');
    if (result) {
      loadStorage.splice(index, 1);
      localStorage.setItem('tokens', JSON.stringify(loadStorage));
      goHome();
    };
  };

  console.log(filtered, index);
  return (
    <form>
      <div className="title-edit-form">
        <h3>Edit Token</h3>
        <button
          type="button"
          className="btn-edit-back"
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
        value={ editToken }
        onChange={ handleChange }
      />
      <label htmlFor="balance">
        Balance
      </label>
      <input
        type="text"
        id="balance"
        name="balance"
        value={ editBalance }
        onChange={ handleChange }
      />
      <div className="btn-conteiner">
        <button
          type="button"
          className="btn-remove"
          onClick={ removeToken }
        >
          Remove
        </button>
        <button
          type="button"
          className="btn-edit-save"
          onClick={ saveToken }
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default FormEditToken;