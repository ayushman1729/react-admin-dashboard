import React from "react";

function TodoTable({ todos }) {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">
          Todos List
        </h6>
      </div>

      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Todo</th>
                <th>Status</th>
                <th>User ID</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>

                  <td>{todo.todo}</td>

                  <td>
                    {todo.completed ? (
                      <span className="badge bg-success">
                        Completed
                      </span>
                    ) : (
                      <span className="badge bg-danger">
                        Pending
                      </span>
                    )}
                  </td>

                  <td>{todo.userId}</td>

                  <td>
                    <button className="btn btn-warning btn-sm me-2">
                      Edit
                    </button>

                    <button className="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}

export default TodoTable;