import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoCartSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import { MdInventory2 } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { BsFilePostFill } from "react-icons/bs";
import ProductTable from "../components/ProductTable";
import UserTable from "../components/UserTable";
import PostTable from "../components/PostTable";
import TodoTable from "../components/TodoTable";
import "../styles/Dashboard.css";
function Dashboard() {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalCarts, setTotalCarts] = useState(0);
  const [totalRecipes, setTotalRecipes] = useState(0);

  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const [totalPosts, setTotalPosts] = useState(0);
  const [totalTodos, setTotalTodos] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [totalQuotes, setTotalQuotes] = useState(0);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setTotalProducts(data.total);
      });

    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setTotalUsers(data.total);
      });

    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((data) => {
        setTotalCarts(data.total);
      });

    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setTotalRecipes(data.total);
      });

    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setTotalPosts(data.total));

    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setTotalTodos(data.total));

    fetch("https://dummyjson.com/comments")
      .then((res) => res.json())
      .then((data) => setTotalComments(data.total));

    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => setTotalQuotes(data.total));

    fetch("https://dummyjson.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });

    fetch("https://dummyjson.com/users?limit=5")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      });

    fetch("https://dummyjson.com/posts?limit=5")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
      });
    fetch("https://dummyjson.com/todos?limit=5")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.todos);
      });
  }, []);

  return (
    <div>
      <div className="container-fluid">
        {/* <!-- Page Heading --> */}
        {/* <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <div>
            <h1 className="h3 mb-1 text-gray-800">👋 Welcome to DEVHUB</h1>

            <p className="text-muted mb-0">
              Manage Products, Users, Posts, Recipes, Todos and more from one
              place.
            </p>
          </div>
        </div> */}

        <div className="dashboard-header">
          <div>
            <span className="dashboard-tag">Welcome Back</span>

            <h1>Dashboard Overview</h1>

            <p>
              Manage products, users, orders and monitor your platform in one
              place.
            </p>
          </div>

          <div className="dashboard-date">
            <h4>{new Date().toLocaleDateString()}</h4>
            <span>Today's Summary</span>
          </div>
        </div>

        <div className="row">
          {/* Total Carts */}
          <div className="col-xl-3 col-md-6 mb-4">
            <Link to="/carts" className="text-decoration-none">
              <div className="card border-left-primary shadow h-100 py-2 dashboard-card">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        Total Carts
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        {totalCarts}
                      </div>
                    </div>
                    <div className="col-auto">
                      <IoCartSharp size={35} className="text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Total Users */}
          <div className="col-xl-3 col-md-6 mb-4">
            <Link to="/users" className="text-decoration-none">
              <div className="card border-left-success shadow h-100 py-2 dashboard-card">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                        Total Users
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        {totalUsers}
                      </div>
                    </div>
                    <div className="col-auto">
                      <FaUser size={35} className="text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Total Recipes */}
          <div className="col-xl-3 col-md-6 mb-4">
            <Link to="/recipes" className="text-decoration-none">
              <div className="card border-left-info shadow h-100 py-2 dashboard-card">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                        Total Recipes
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        {totalRecipes}
                      </div>
                    </div>
                    <div className="col-auto">
                      <MdRestaurant size={35} className="text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Total Products */}
          <div className="col-xl-3 col-md-6 mb-4">
            <Link to="/products" className="text-decoration-none">
              <div className="card border-left-warning shadow h-100 py-2 dashboard-card">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                        Total Products
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        {totalProducts}
                      </div>
                    </div>
                    <div className="col-auto">
                      <MdInventory2 size={35} className="text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Total Posts */}
          <div className="col-xl-3 col-md-6 mb-4">
            <Link to="/posts" className="text-decoration-none">
              <div className="card border-left-danger shadow h-100 py-2 dashboard-card">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                        Total Posts
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        {totalPosts}
                      </div>
                    </div>
                    <div className="col-auto">
                      <BsFilePostFill size={35} className="text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Total Todos */}
          <div className="col-xl-3 col-md-6 mb-4">
            <Link to="/todos" className="text-decoration-none">
              <div className="card border-left-secondary shadow h-100 py-2 dashboard-card">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-secondary text-uppercase mb-1">
                        Total Todos
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        {totalTodos}
                      </div>
                    </div>
                    <div className="col-auto">
                      <FaClipboardList size={35} className="text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Total Comments */}
          <div className="col-xl-3 col-md-6 mb-4">
            <Link to="/comments" className="text-decoration-none">
              <div className="card border-left-dark shadow h-100 py-2 dashboard-card">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-dark text-uppercase mb-1">
                        Total Comments
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        {totalComments}
                      </div>
                    </div>
                    <div className="col-auto">
                      <FaRegCommentDots size={35} className="text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Total Quotes */}
          <div className="col-xl-3 col-md-6 mb-4">
            <Link to="/quotes" className="text-decoration-none">
              <div className="card border-left-info shadow h-100 py-2 dashboard-card">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                        Total Quotes
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        {totalQuotes}
                      </div>
                    </div>
                    <div className="col-auto">
                      <FaQuoteLeft size={35} className="text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-xl-8 col-lg-7 mb-4">
            <AreaChart />
          </div> */}

          {/* <div className="col-xl-4 col-lg-5 mb-4">
            <PieChart />
          </div> */}

          <div className="row">
            <div className="col-12">
              <ProductTable products={products} />
            </div>
          </div>

          <div className="row">
            <div className="col-12 mb-4">
              <UserTable users={users} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-4">
              <PostTable posts={posts} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-4">
              <TodoTable todos={todos} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
