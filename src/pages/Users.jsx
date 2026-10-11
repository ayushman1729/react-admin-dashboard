import { useState, useEffect } from "react";
import UserTable from "../components/UserTable";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // const handleEdit = (id) => {
  //   console.log("Edit User:", id);
  // };
  const handleEdit = (id) => {
  navigate(`/users/edit/${id}`);
};

 const handleDelete = async (id) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel",
  });

  if (!result.isConfirmed) return;

  setUsers((prevUsers) =>
    prevUsers.filter((user) => user.id !== id)
  );

  Swal.fire({
    title: "Deleted!",
    text: "User deleted successfully.",
    icon: "success",
  });
};

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.firstName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Users</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <UserTable
        users={filteredUsers}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Users;
