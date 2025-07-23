import React, { useEffect, useState } from "react";
import StockContainer from "./components/StockContainer";
import PortfolioContainer from "./components/PortfolioContainer";
import SearchBar from "./components/SearchBar";

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState(""); // "Alphabetically" or "Price"
  const [filterType, setFilterType] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then(setStocks);
  }, []);

  const handleBuyStock = (stock) => {
    if (!portfolio.includes(stock)) setPortfolio([...portfolio, stock]);
  };

  const handleSellStock = (stock) => {
    setPortfolio(portfolio.filter((s) => s.id !== stock.id));
  };

  const handleSortChange = (sortType) => setSortBy(sortType);
  const handleFilterChange = (type) => setFilterType(type);

  const displayedStocks = [...stocks]
    .filter((stock) => filterType === "All" || stock.type === filterType)
    .sort((a, b) => {
      if (sortBy === "Alphabetically") return a.name.localeCompare(b.name);
      if (sortBy === "Price") return a.price - b.price;
      return 0;
    });

  return (
    <div>
      <SearchBar
        onSortChange={handleSortChange}
        onFilterChange={handleFilterChange}
      />
      <div className="row">
        <StockContainer stocks={displayedStocks} onBuyStock={handleBuyStock} />
        <PortfolioContainer
          portfolio={portfolio}
          onSellStock={handleSellStock}
        />
      </div>
    </div>
  );
}

export default App;
