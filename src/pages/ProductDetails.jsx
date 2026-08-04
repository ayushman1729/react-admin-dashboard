import { useNavigate, useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "../api/productApi";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getSingleProduct(id),
  });

  if (isLoading) {
    return (
      <div className="container-fluid mt-5 text-center">
        <div className="spinner-border text-primary"></div>
        <p className="mt-3">Loading Product...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container-fluid mt-5">
        <div className="alert alert-danger">Failed to load product.</div>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      {/* Breadcrumb */}
      

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Product Details</h2>

        <button
          className="btn btn-outline-secondary"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </div>

      <div className="card shadow border-0">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-4 text-center">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="img-fluid rounded"
                style={{ maxHeight: "320px" }}
              />
            </div>

            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">{product.title}</h2>

              <span className="badge bg-primary me-2">{product.category}</span>

              <span className="badge bg-success">{product.brand}</span>

              <hr />

              <div className="row">
                <div className="col-md-6 mb-3">
                  <strong>Price</strong>
                  <p>${product.price}</p>
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Stock</strong>
                  <p>{product.stock}</p>
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Rating</strong>
                  <p>⭐ {product.rating}</p>
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Discount</strong>
                  <p>{product.discountPercentage}%</p>
                </div>

                <div className="col-md-6 mb-3">
                  <strong>SKU</strong>
                  <p>{product.sku || "N/A"}</p>
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Availability</strong>
                  <p>{product.availabilityStatus || "Available"}</p>
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Warranty</strong>
                  <p>{product.warrantyInformation || "N/A"}</p>
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Shipping</strong>
                  <p>{product.shippingInformation || "N/A"}</p>
                </div>
              </div>

              <hr />

              <h5>Description</h5>

              <p className="text-muted">{product.description}</p>

              {product.tags && (
                <>
                  <h5>Tags</h5>

                  {product.tags.map((tag) => (
                    <span key={tag} className="badge bg-dark me-2">
                      {tag}
                    </span>
                  ))}
                </>
              )}

              <div className="mt-4">
                {/* <Link
                  to={`/admin/products/${product.id}/edit`}
                  className="btn btn-warning me-2"
                >
                  Edit Product
                </Link> */}
                <Link
                  to={`/products/edit/${product.id}`}
                  className="btn btn-warning me-2"
                >
                  <i className="bi bi-pencil-square me-2"></i>
                  Edit Product
                </Link>

                <button
                  className="btn btn-secondary"
                  onClick={() => navigate(-1)}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
