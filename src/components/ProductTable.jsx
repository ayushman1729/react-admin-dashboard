import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice.js";
import { useSelector } from "react-redux";

function ProductTable({ products, handleDelete }) {
  const dispatch = useDispatch();
  
  const cartItems=useSelector((state)=> state.cart.items);
  console.log(cartItems);
  
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Products List</h6>
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
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {products?.map((product) => (
                <tr key={product.id}>
                  <td>
                    <Link to={`/products/${product.id}`}>
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        width="50"
                        style={{ cursor: "pointer" }}
                      />
                    </Link>
                  </td>

                  <td>
                    <Link
                      to={`/products/${product.id}`}
                      className="text-decoration-none fw-bold"
                    >
                      {product.title}
                    </Link>
                  </td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>${product.price}</td>
                  <td>{product.stock}</td>
                  <td>{product.rating}</td>

                  <td>
                    <Link
                      to={`/products/edit/${product.id}`}
                      className="btn btn-warning btn-sm me-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-success btn-sm ms-2"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      Add to Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductTable;
