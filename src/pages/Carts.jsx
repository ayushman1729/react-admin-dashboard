import { useState, useEffect } from "react";
import CartTable from "../components/CartTable";

function Carts() {
  const [carts, setCarts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((data) => {
        setCarts(data.carts);
      });
  }, []);

  const filteredCarts = carts.filter((cart) =>
    cart.userId.toString().includes(search),
  );

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">Carts</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search carts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <CartTable carts={filteredCarts} />
    </div>
  );
}

export default Carts;
