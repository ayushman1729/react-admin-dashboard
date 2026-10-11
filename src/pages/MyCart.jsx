import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";

function MyCart() {
  const cartItems = useSelector((state) => state.cart?.items || []);

  const total = cartItems.reduce((acc, item) => acc + (item.price || 0), 0);

  return (
    <div className="container-fluid mt-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="font-weight-bold" style={{ fontSize: "24px", color: "#0f172a" }}>
            Shopping Cart
          </h2>
          <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
            Manage selected items and prepare fulfillment orders
          </p>
        </div>

        {cartItems.length > 0 && (
          <Link to="/products" className="btn btn-outline-primary btn-sm">
            <FaArrowLeft className="me-2" /> Add More Products
          </Link>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="card text-center p-5 shadow-sm">
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#fff1f2",
              color: "#e11d48",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
              fontSize: "24px",
            }}
          >
            <FaShoppingCart />
          </div>
          <h4 className="font-weight-bold mb-2">Your Cart is Empty</h4>
          <p className="text-muted mb-4" style={{ maxWidth: "380px", margin: "0 auto" }}>
            Explore our products catalog and click "Add to Cart" to start adding items here.
          </p>
          <div>
            <Link to="/products" className="btn btn-primary px-4 py-2">
              Browse Products Catalog
            </Link>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            <div className="card shadow-sm mb-4">
              <div className="table-responsive">
                <table className="table align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Product</th>
                      <th>Category</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={`${item.id}-${index}`}>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <img
                              src={item.thumbnail}
                              width="50"
                              height="50"
                              style={{ objectFit: "cover", borderRadius: "8px", border: "1px solid #e2e8f0" }}
                              alt={item.title}
                            />
                            <div>
                              <strong style={{ fontSize: "14px" }}>{item.title}</strong>
                              <div className="text-muted" style={{ fontSize: "12px" }}>
                                {item.brand || "Brand"}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-light text-dark text-capitalize" style={{ border: "1px solid #e2e8f0" }}>
                            {item.category || "General"}
                          </span>
                        </td>
                        <td className="font-weight-bold" style={{ color: "#e11d48" }}>
                          ${item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card shadow-sm p-4">
              <h5 className="font-weight-bold mb-3">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2" style={{ fontSize: "14px" }}>
                <span className="text-muted">Total Items:</span>
                <strong>{cartItems.length}</strong>
              </div>
              <div className="d-flex justify-content-between mb-3" style={{ fontSize: "14px" }}>
                <span className="text-muted">Shipping:</span>
                <span className="text-success font-weight-bold">Free Express</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <span className="font-weight-bold" style={{ fontSize: "16px" }}>Grand Total:</span>
                <span className="font-weight-bold" style={{ fontSize: "20px", color: "#e11d48" }}>
                  ${total.toFixed(2)}
                </span>
              </div>
              <button
                className="btn btn-primary btn-block w-100 py-2 font-weight-bold"
                onClick={() => alert("Order fulfillment simulation processed successfully!")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyCart;