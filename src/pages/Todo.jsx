import { useState, useEffect } from "react";
import TodoTable from "../components/TodoTable";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.todos);
      });
  }, []);

  const filteredTodos = todos.filter(
    (todo) =>
      todo.id.toString().includes(search) ||
      todo.todo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Todos</h1>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search todos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <TodoTable todos={filteredTodos} />
    </div>
  );
}

export default Todos;