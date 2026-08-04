import { useSelector } from "react-redux";

function MyCart() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="container-fluid">
      <h2>My Cart</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.thumbnail} width="50" alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyCart;