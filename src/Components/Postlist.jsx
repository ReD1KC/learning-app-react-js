import { PostItem } from "./PostItem";

export const PostList = ({ posts, title }) => {
  return (
    <>
      <h1 style={{ textAligh: "center" }}>{title}</h1>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </>
  );
};
