// cia isgaunami duomenys is api

import { useEffect, useState } from "react";
import Post from "../Post/Post";
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((response) => {
        setPosts(response);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(posts);

  return (
    <div className="posts">
      <Post title="Test" body="hello world" />
      <Post title={posts[0].title} body={posts[0].body} />
      <Post title={posts[1].title} body={posts[1].body} />
      <Post />
    </div>
  );
};

export default Posts;
