import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductTable from "../components/ProductTable";
import { getProducts, getCategories, deleteProduct } from "../api/productApi";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import ProductSkeleton from "../components/ProductSkeleton";
function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [brands, setBrands] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const limit = 10;
  const skip = (currentPage - 1) * limit;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", currentPage],
    queryFn: () => getProducts(limit, skip),
  });

  const { data: categoriesData = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  useEffect(() => {
   
    if (!data) return;

    const updatedProducts =
      JSON.parse(localStorage.getItem("updatedProducts")) || {};

    const addedProducts =
      JSON.parse(localStorage.getItem("addedProducts")) || [];

    const mergedProducts = data.products.map((product) =>
      updatedProducts[product.id]
        ? { ...product, ...updatedProducts[product.id] }
        : product,
    );

    const allProducts = [...addedProducts, ...mergedProducts];

    setProducts(allProducts);
    setTotalProducts(allProducts.length);

    const uniqueBrands = [
      ...new Set(allProducts.map((product) => product.brand).filter(Boolean)),
    ];

    setBrands(uniqueBrands);
  }, [data]);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    try {
      const addedProducts =
        JSON.parse(localStorage.getItem("addedProducts")) || [];

      const isLocalProduct = addedProducts.some((product) => product.id === id);

      if (isLocalProduct) {
        const updatedAddedProducts = addedProducts.filter(
          (product) => product.id !== id,
        );

        localStorage.setItem(
          "addedProducts",
          JSON.stringify(updatedAddedProducts),
        );
      } else {
        await deleteProduct(id);
      }

      setProducts((prev) => prev.filter((product) => product.id !== id));

      Swal.fire({
        title: "Deleted!",
        text: "Product deleted successfully.",
        icon: "success",
      });
    } catch (err) {
      console.error(err);
      console.log(err.response);

      Swal.fire({
        title: "Error!",
        text: "Failed to delete product.",
        icon: "error",
      });
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    const matchesBrand =
      selectedBrand === "all" || product.brand === selectedBrand;

    return matchesSearch && matchesCategory && matchesBrand;
  });

  const sortedProducts = [...filteredProducts];

  switch (sortBy) {
    case "price-low":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      sortedProducts.sort((a, b) => b.rating - a.rating);
      break;
    case "stock":
      sortedProducts.sort((a, b) => b.stock - a.stock);
      break;
    case "title":
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
      break;
    default:
      break;
  }

  const totalPages = Math.ceil(totalProducts / limit);

  if (isLoading) {
    return (
      <div className="container-fluid">
         <ProductSkeleton />;

      </div>
    );
  }

  if (isError) {
    return (
      <div className="container-fluid">
        <h4 className="text-danger">Failed to load products</h4>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h3 text-gray-800"> Product Management</h1>
          <p className="text-muted mb-0">Manage all products from one place.</p>
        </div>

        <Link to="/products/add" className="btn btn-primary">
          + Add Product
        </Link>
      </div>
      <div className="row mb-4">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>

            {categoriesData.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="all">All Brands</option>

            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
            <option value="stock">Stock</option>
            <option value="title">Title (A-Z)</option>
          </select>
        </div>
      </div>

      <ProductTable products={sortedProducts} handleDelete={handleDelete} />

      <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
        <button
          className="btn btn-outline-primary"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous
        </button>

        <span className="fw-bold">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="btn btn-outline-primary"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Products;
