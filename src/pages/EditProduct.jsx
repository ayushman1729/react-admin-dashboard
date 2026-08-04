import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setPrice(data.price);
        setBrand(data.brand);
        setCategory(data.category);
        setImage(data.thumbnail);
        setStock(data.stock);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`https://dummyjson.com/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        price: Number(price),
        category,
        brand,
        stock: Number(stock),
        thumbnail: image,
      }),
    });

    const data = await res.json(); // updated data ko respone mei bhej rha hai

    const updatedProducts =
      JSON.parse(localStorage.getItem("updatedProducts")) || {};

    updatedProducts[id] = data;

    localStorage.setItem("updatedProducts", JSON.stringify(updatedProducts));

    Swal.fire({
      title: "Success!",
      text: "Product Updated Successfully",
      icon: "success",
      confirmButtonText: "OK",
    });

    navigate("/products");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

  return (
    <div className="container-fluid">
      <h2 className="mb-4">Edit Product</h2>

      <form onSubmit={handleSubmit} className="card shadow p-4">
        <div className="mb-3">
          <label>Image</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Current Image</label>

          <div className="mt-2">
            <img
              src={image}
              alt={title}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px",
                border: "1px solid #ddd",
              }}
            />
          </div>
        </div>
        {/* <div className="mb-3">
          <label>Image URL</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div> */}

        <div className="mb-3">
          <label>Title</label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Category</label>
          <input
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Brand</label>
          <input
            className="form-control"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Stock</label>
          <input
            type="number"
            className="form-control"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <button className="btn btn-success">Update Product</button>
      </form>
    </div>
  );
}

export default EditProduct;
