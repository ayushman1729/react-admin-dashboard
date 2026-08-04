import React from "react";

function PostTable({ posts }) {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">
          Posts List
        </h6>
      </div>

      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Views</th>
                <th>Likes</th>
                <th>Dislikes</th>
                <th>Tags</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.views}</td>
                  <td>{post.reactions.likes}</td>
                  <td>{post.reactions.dislikes}</td>
                  <td>{post.tags.join(", ")}</td>

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

export default PostTable;