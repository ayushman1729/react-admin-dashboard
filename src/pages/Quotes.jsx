import { useEffect, useState } from "react";
import QuoteTable from "../components/QuoteTable";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.quotes);
      });
  }, []);

  const filteredQuotes = quotes.filter(
    (quote) =>
      quote.id.toString().includes(search) ||
      quote.quote.toLowerCase().includes(search.toLowerCase()) ||
      quote.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Quotes</h1>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search quotes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <QuoteTable quotes={filteredQuotes} />
    </div>
  );
}

export default Quotes;