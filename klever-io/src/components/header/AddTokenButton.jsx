import React from 'react';
import { useNavigate } from 'react-router-dom';

function AddTokenButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="btn-add"
      onClick={ () => navigate('/add-token')}
    >
      Add Token
    </button>
  );
}

export default AddTokenButton;