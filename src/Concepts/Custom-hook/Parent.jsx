import { useState, useEffect } from "react";
import useFetch from "./useFetch";

const Parent = () => {
  const data = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

export default Parent;
