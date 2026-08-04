import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProductSkeleton() {
  return (
    <div className="card shadow mb-4">
      <div className="card-header">
        <Skeleton width={180} height={25} />
      </div>

      <div className="card-body">
        <table className="table">
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
            {[...Array(8)].map((_, index) => (
              <tr key={index}>
                <td><Skeleton width={50} height={50} /></td>
                <td><Skeleton /></td>
                <td><Skeleton /></td>
                <td><Skeleton /></td>
                <td><Skeleton width={60} /></td>
                <td><Skeleton width={40} /></td>
                <td><Skeleton width={40} /></td>
                <td><Skeleton width={120} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductSkeleton;