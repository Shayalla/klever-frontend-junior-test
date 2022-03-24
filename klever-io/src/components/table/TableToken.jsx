import React, { useEffect, useState } from 'react';
import edit from './edit.png'

function TableToken() {
  const [tokens, setTokens] = useState([]);
  
  useEffect(() => {
    const loadStorage = localStorage.getItem('tokens');
    if (!loadStorage) localStorage.setItem('tokens', JSON.stringify([{token:'KLV', balance: '121,121.21'}, {token:'DVKS', balance: '121,121.21'}]));
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
          <button><img src={edit} alt="edit icon" width="15px"/></button>
          <div>
            <h2>{token}</h2>
            <h2>{balance}</h2>
          </div>
        </div>
      ))}
    </section>
  );
}

export default TableToken;