import AdminLayout from "./layouts/AdminLayout";
import Products from "./pages/Products";
import Carts from "./pages/Carts";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Recipes from "./pages/Recipes";
import Posts from "./pages/Posts";
import Todos from "./pages/Todo";
import Quotes from "./pages/Quotes";
import EditProduct from "./pages/EditProduct";
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./pages/AddProduct";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import TechStack from "./pages/TechStack";
import Contact from "./pages/Contact";
import MyCart from "./pages/MyCart";
import Dashboard from "./pages/Dashboard";
import EditUser from "./pages/EditUser";
import Comments from "./pages/Comments";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
      <Route path="/tech-stack" element={<TechStack />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="/my-cart" element={<MyCart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/comments" element={<Comments/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/carts" element={<Carts />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
        </Route>
      </Route>

      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
