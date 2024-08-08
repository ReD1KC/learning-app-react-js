import { useState, useRef } from "react";
import "./App.css";
import { PostList } from "./Components/Postlist";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript", body: "Description" },
    { id: 3, title: "JavaScript", body: "Description" },
    { id: 4, title: "JavaScript", body: "Description" },
    { id: 5, title: "JavaScript", body: "Description" },
  ]);

  const bodyInputRef = useRef();
  const [title, setTitle] = useState("");
  const addNewPost = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form action="">
        <input
          type="text"
          placeholder="Название поста"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="text" placeholder="Описание поста" ref={bodyInputRef} />
        <button onClick={addNewPost}>Создание поста</button>
      </form>
      <PostList posts={posts} title={"Список постов 1"} />
    </>
  );
}

export default App;
