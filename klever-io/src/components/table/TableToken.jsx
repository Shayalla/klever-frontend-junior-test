import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import edit from './edit.png';

function TableToken() {
  const [tokens, setTokens] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const loadStorage = localStorage.getItem('tokens');
    if (!loadStorage) localStorage.setItem('tokens', JSON.stringify([]));
    const storageObj = JSON.parse(localStorage.getItem('tokens'));
    setTokens(storageObj);
  }, []);

  return (
    <section>
      <div className="title-token">
        <h5>Tokens</h5>
        <h5>Balance</h5>
      </div>
      {tokens.length !== 0 && tokens.map(({token, balance}, index) => (
        <div key={index} className="row-token">
          <button
            type="button"
            onClick={ () => navigate(`/edit-token/${token}`) }
          >
            <img
              src={edit}
              alt="edit icon"
              width="15px"/>
          </button>
          <div>
            <h2>{token}</h2>
            <h2>{balance}</h2>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TableToken;