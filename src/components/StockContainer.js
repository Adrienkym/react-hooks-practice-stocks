
import Stock from "./Stock";

function StockContainer({ stocks, onBuyStock }) {
  return (
    <div className="col">
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <Stock key={stock.id} stock={stock} onClick={onBuyStock} />
      ))}
    </div>
  );
}

export default StockContainer;

