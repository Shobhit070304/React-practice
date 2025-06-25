import React from "react";
import { Fragment } from "react";

const posts = [
  { id: 1, title: "Post 1", body: "This is the body of post 1" },
  { id: 2, title: "Post 2", body: "This is the body of post 2" },
  { id: 3, title: "Post 3", body: "This is the body of post 3" },
];

// We'have used Fragment to avoid adding extra nodes to the DOM
function ReactFragment() {
  return (
    <>
      <div>Fragment</div>
      {posts.map((post) => (
        <Fragment key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </Fragment>
      ))}
    </>
  );
}

export default ReactFragment;
