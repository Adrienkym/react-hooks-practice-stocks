import React from 'react';

function Stock({ stock, onClick }) {
  return (
    <div onClick={() => onClick(stock)} className="card">
      <div className="card-body">
        <h5>{stock.name}</h5>
        <p>{stock.ticker} - {stock.type}</p>
        <p>${stock.price}</p>
      </div>
    </div>
  );
}

export default Stock;

