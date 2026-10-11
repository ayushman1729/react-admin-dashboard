import React, { useEffect, useState } from "react";
import axios from "axios";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchComments = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/comments");
      setComments(res.data.comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  if (loading) {
    return <h4 className="text-center mt-5">Loading...</h4>;
  }

  return (
    <div className="container-fluid mt-4">
      <div className="card shadow">
        <div className="card-header">
          <h4 className="mb-0">Comments Management</h4>
        </div>

        <div className="card-body table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Comment</th>
                <th>User</th>
                <th>Likes</th>
              </tr>
            </thead>

            <tbody>
              {comments.map((comment) => (
                <tr key={comment.id}>
                  <td>{comment.id}</td>
                  <td>{comment.body}</td>
                  <td>{comment.user.fullName}</td>
                  <td>{comment.likes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Comments;