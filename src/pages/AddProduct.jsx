import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [preview, setPreview] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        price: Number(price),
        brand,
        category,
        stock: Number(stock),
        thumbnail: preview,
      }),
    });

    const data = await res.json();

    data.id = Date.now();
    
    const addedProducts =
      JSON.parse(localStorage.getItem("addedProducts")) || [];

    addedProducts.unshift(data);

    localStorage.setItem("addedProducts", JSON.stringify(addedProducts));

    Swal.fire({
      title: "Success!",
      text: "Product Added Successfully!",
      icon: "success",
      confirmButtonText: "OK",
    });
    navigate("/products");

    setTitle("");
    setPrice("");
    setBrand("");
    setCategory("");
    setStock("");
    setPreview("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setPreview(imageURL);
  };

  return (
    <div className="container-fluid">
      <h2 className="mb-4">Add Product</h2>

      <form onSubmit={handleSubmit} className="card p-4 shadow">
        <div className="mb-3">
          <label>Product Title</label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Product Image</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <div className="mb-3">
          <label>Category</label>
          <input
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div className="mb-3 ">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <div className="mb-3">
            <label>Stock</label>
            <input
              type="number"
              className="form-control"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label>Brand</label>
          <input
            type="text"
            className="form-control"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
