import { useState } from "react";
import "./App.css";
import { PostList } from "./Components/Postlist";
import { MyInput } from "./Components/UI/input/MyInput";
import MyButton from "./Components/UI/button/Mybutton";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: "JavaScript", body: "Description" },
        { id: 2, title: "JavaScript", body: "Description" },
        { id: 3, title: "JavaScript", body: "Description" },
    ]);

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            title,
            body,
        };
        setPosts([...posts, newPost]);
    };

    return (
        <>
            <form action="">
                <MyInput
                    type="text"
                    placeholder="Название поста"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <MyInput
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    type="text"
                    placeholder="Описание поста"
                />
                <MyButton onClick={addNewPost}>Создание поста</MyButton>
            </form>
            <PostList posts={posts} title={"Список постов 1"} />
        </>
    );
}

export default App;
