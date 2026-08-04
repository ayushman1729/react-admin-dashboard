import React from "react";

function CartTable({ carts }) {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Carts List</h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Cart ID</th>
                <th>User ID</th>
                <th>Total Products</th>
                <th>Total Quantity</th>
                <th>Total Price</th>
                <th>Discounted Total</th>
              </tr>
            </thead>

            <tbody>
              {carts.map((cart) => (
                <tr key={cart.id}>
                  <td>{cart.id}</td>
                  <td>{cart.userId}</td>
                  <td>{cart.totalProducts}</td>
                  <td>{cart.totalQuantity}</td>
                  <td>${cart.total}</td>
                  <td>${cart.discountedTotal}</td>
                </tr>
              ))}
            </tbody>
            <tbody>
              {carts.map((cart) => (
                <tr key={cart.id}>
                  <td>{cart.id}</td>
                  <td>{cart.userId}</td>
                  <td>{cart.totalProducts}</td>
                  <td>{cart.totalQuantity}</td>
                  <td>${cart.total}</td>
                  <td>${cart.discountedTotal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CartTable;
