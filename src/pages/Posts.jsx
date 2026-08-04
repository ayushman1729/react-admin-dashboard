import { useState, useEffect } from "react";
import PostTable from "../components/PostTable";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
      });
  }, []);

  const filteredPosts = posts.filter(
  (post) =>
    post.id.toString().includes(search) ||
    post.title.toLowerCase().includes(search.toLowerCase())
);

  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Posts</h1>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <PostTable posts={filteredPosts} />
    </div>
  );
}

export default Posts;