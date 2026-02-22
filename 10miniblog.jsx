//File:main.jsx
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home,Post} from "./App.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes>
  </BrowserRouter>,
);



//File:App.jsx
import { Link,useParams } from "react-router-dom";
export function Home() {
  const posts = [
    {
      id: 1,
      title: "React Introduction",
      content:
        "React is a JavaScript library used to build fast and interactive userinterfaces...",
    },
    {
      id: 2,
      title: "Understanding Components",
      content:
        "Components are the reusable building blocks of a React application...",
    },
  ];
  return (
    <div>
      <h1>📘 Mini Blog – Home</h1>
      <p>Select a blog post to view the full article.</p>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content.substring(0, 90)}...</p>
          <Link to={`/post/${post.id}`}>Read Full Post →</Link>
        </div>
      ))}
    </div>
  );
}

export function Post() {
  const { id } = useParams();
  const posts = [
    {
      id: 1,
      title: "React Introduction",
      content:
        "React is a JavaScript library developed by Facebook.\n\nIt helps build fast,responsive user interfaces by using components and a Virtual DOM.\n\nReact allows developers to break large UIs into smaller reusable parts, making development efficient.",
    },
    {
      id: 2,
      title: "Understanding Components",
      content:
        "Components are independent building blocks in React.\n\nEach componentmanages its own structure and UI using JSX.\n\nThey improve reusability,readability, and organization in React applications.",
    },
  ];
  const post = posts.find((p) => p.id === parseInt(id));
  if (!post) {
    return <h2>Post Not Found</h2>;
  }
  return (
    <div>
      <Link
        to="/">
        ← Back to Home
      </Link>
      <div>
        <h1>{post.title}</h1>
        <p>
          {post.content}
        </p>
      </div>
    </div>
  );
}
